var express = require('express');

var bodyParser = require('body-parser')

var app = express();
app.locals.pretty = true; // 코드가 이뻐진다
app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public')); // 관습적으로 public을 사용한다

app.use(bodyParser.urlencoded({ extended: false}))

app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
});

app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
});

app.get('/form', function(req, res){
    res.render('form');
});

app.get('/topic/:id', function(req, res){
    var topics = [
      'Javascript is....',
      'Nodejs is...',
      'Express is...'
    ];

    var output = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br><br>
    ${topics[req.params.id] // id 부분을 바꾸면 다르게 사용 할 수 있다
    }
    `

    res.send(output);
});

app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id + ',' + req.params.mode)
});

app.get('/template', function(req, res){
    res.render('temp', {time: Date(), _title: 'Jade'});
});

app.get('/', function(req, res){
    res.send('Hello home page'); 
});

app.get('/dynamic', function(req,res){
    var lis = '';
    for(var i = 0; i < 5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        Hello Dynamic!
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>
    `
    res.send(output);
});

app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/route.png">')
});

app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>'); // HTML code도 사용 가능하다
});

app.listen(3000, () => {
    console.log('Conneted 3000 port!');
});