var express = require('express');
const AWS = require('aws-sdk');
const formidable = require('formidable');
const fs = require('fs')
const path = require('path');
var config = require('./config.js')
// const bodyParser = require('body-parser');

var app = express();

AWS.config.region = config.region;
// app.use(express.json());
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
// 	extended: true,
// }));

app.use(express.static('public'));
AWS.config.update({
	accessKeyId: config.AWSAccessKeyId,
	secretAccessKey: config.AWSSecretKey
});
const rekognition = new AWS.Rekognition({
	region: config.region
});

function base64_encode(file) {
	// read binary data
	var bitmap = fs.readFileSync(file);
	// convert binary data to base64 encoded string
	return new Buffer(bitmap);
}

app.get('/health', (req, res) => {
	res.send('ok');
});

app.post('/image', async (req, res) => {
	let s3 = new AWS.S3();
	let form = new formidable.IncomingForm();

	// make upload fileName
	let fileName = '';
	let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 8; i++) fileName += possible.charAt(Math.floor(Math.random() * possible.length));

	// 서버에 업로드 완료 후
	await form.parse(req, async function (err, fields, files) {
		if (!files.image) {
			res.json(Format.badRequest('image not found!!'));
			return;
		}

		let image = files.image;
		let defaultPath = fileName;
		let imageUrl = defaultPath + path.parse(image.name).ext;

		// image upload
		await s3.upload({
			Bucket: config.Bucket,
			Key: imageUrl,
			ACL: 'public-read',
			Body: fs.createReadStream(image.path)
		}, function (err, result) {
			if (err) console.log(err);
			else {
				rekognition.indexFaces({
					CollectionId: config.collectionName,
					Image: {
						S3Object: {
							Bucket: config.Bucket,
							Name: imageUrl,
						}
					},
					ExternalImageId: imageUrl,
					DetectionAttributes: [
						"ALL"
					]
				}, function (err, data) {
					if (err) {
						res.send(err);
					} else {
						res.json(data)
						return;
					}
				});
			}
		});
		// unlink tmp files
		await fs.unlinkSync(image.path);
	});
})

app.post('/api/recognize', async function (req, res, next) {
	let form = new formidable.IncomingForm();

	await form.parse(req, async function (err, fields, files) {
		if (!files.image) {
			res.json(Format.badRequest('image not found!!'));
			return;
		}
		const base64 = base64_encode(files.image.path);

		rekognition.searchFacesByImage({
			"CollectionId": config.collectionName,
			"FaceMatchThreshold": 70,
			"Image": {
				"Bytes": base64,
			},
			"MaxFaces": 1
		}, function (err, data) {
			if (err) {
				res.send(err);
			} else {
				const r = 0;
				for(let i = 0; i < data.FaceMatches; i+= 1){
					if(data.FaceMatches[i].Similarity > r){
						r = i
					}
				}
				res.json(data.FaceMatches[r].Similarity);
			}
		});
		// unlink tmp files
		await fs.unlinkSync(files.image.path);
	});
});

app.listen(5555, function () {
	console.log('Listening on port 5555!');
})