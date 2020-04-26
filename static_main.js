const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let url = req.url
  if (url!="/favicon.ico"){
    res.statusCode = 200; // 응답코드
    // 200: 정상
    // 404: 그런 파일을 찾을 수 없음
    // 정적인 파일을 제공
    res.end(fs.readFileSync(`.${url}`))
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});