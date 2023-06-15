var http=require('http')
var express=require("express")
var app=express()
app.use(express.static('public'))

// app.use(function(req,res){
//     res.send("<h1>잘못들어왔습니다.</h1>")
// })
app.use(app.router);

// 라우트처리
app.all("/a",function(req,res){
    res.send("<h1>page A</h1>");
})
app.all("/b",function(req,res){
    res.send("<h1>page B</h1>");
})
app.all("/c",function(req,res){
    res.send("<h1>page C</h1>");
})



// 서버를 실행한다
http.createServer(app).listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273")
})