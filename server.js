// express 라는 외부모듈 사용
// 모듈을 추출한다.
var http=require('http')
var express=require("express")
// 웹서버를 생성, 서버 애플리케이션 객체생성
var app=express()
// 요청이 왔을때 실행할 함수
app.use(function(req,res,next){
    console.log("first 실행")
    next()
})
app.use(function(req,re,next){
    console.log("second 실행")
    next()
})
app.use(function(req,res){
    res.send("<h1>welcome to my world</h1>")
})


// 서버를 실행한다
// http.createServer(app).listen(52273,function(){
//     console.log("Server Running at http://127.0.0.1:52273")
// })