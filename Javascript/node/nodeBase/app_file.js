var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var _storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function ( req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})
var upload = multer({ storage: _storage });

var app = express();

app.locals.pretty = true; // 코드가 이뻐진다

app.use('/user', express.static('uploads'));

app.set('views', './views_file');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/upload', upload.single('userfile'), function(req, res){ 
    res.send('Uploaded' + req.file.filename)
});

app.get('/upload', function(req, res){
    res.render('upload');
})

app.get('/topic/new', function(req, res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        res.render('new', {topics:files});
    });
});

app.get(['/topic', '/topic/:id'], function(req, res){
     var id = req.params.id;
     fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        if(id){
            // id값이 있을 때
            fs.readFile('data/'+id, 'utf8', function(err, data){
                if(err){
                    console.log(err);
                    res.status(500).send('Internal Server Error')
                }
                res.render('view', {topics: files, title: id, description: data});
             });
        }
        else {
        // id 값이 없을 때
            res.render('view', {topics:files, title: 'Welcome', description: 'Hello, JavaScript Server'});
        } 
    });
});

// 합치기
// app.get('/topic', function(req,res){
//     fs.readdir('data', function(err, files){
//         if(err){
//             console.log(err);
//             res.status(500).send('Internal Server Error')
//         }
//         res.render('view', {topics:files});        
//     });
// });
 


app.post('/topic', function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title, description, function(err){
        if(err){
            res.status(500).send('Internal Server Error')
        }
        res.redirect('/topic/'+ title);
    }); 
});

app.listen(3000, function(){
    console.log('Connected, 3000 port!')
});