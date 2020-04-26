const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
// http://naver.com:80/index.html?id=css#id
// http: 프로토콜
// naver.com: 도메인
// 80: 포트
// /index.html: 경로(패스)
// ?id=css : 쿼리스트링
// #id : 앵커 a태그

const server = http.createServer((req, res) => {
    // url 모듈 필요
    
    let _url = req.url
    // node js querystring 
    //console.log(_url)
    var queryData = url.parse(_url, true).query;
    // console.log(queryData.id)
    let title = queryData.id
    // ?id=html -> 쿼리스트링
    // /html -> 시맨틱 url
    console.log(queryData.id)
    // queryData의 id 값이 있는지 비교

    // if(queryData.id==null){
    //     //html -> head, body
    //     title = 'Programing wiki'
    //     data = 'Hello.'
    //     const template = `<head></head><body><h1>${title}</h1><h3>${data}</h3></body>`
    //     res.statusCode = 200;
    //     res.end(template);
    // } else{
        console.log(title)
    fs.readFile(`../data/${title}`, 'utf8', (err, data)=>{
        //console.log(data);
        // 만약 에러가 발생하면
        // end 내용은 not found
        // 상태코드는 404로 응답

        // 홈페이지
        // 만약 쿼리스트링이 없으면 
        // title: welcome
        // data: hi
       
        if (err!=null){
            res.statusCode =404;
            res.end(`<h1>4  0  4 Not found</h1>`);
        }
        const template = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1><a href="/?id=Web">WEB - ${title}</a></h1>
                <ul>
                    <li><a href="/?id=html">html</a></li>
                    <li><a href="/?id=css">css</a></li>
                    <li><a href="/?id=javascript">javascript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${data}</p>
            </body>
            </html>`
       
            res.statusCode = 200;
            res.end(template);
        });
    });
     //html

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});