// nodejs 파일읽기
const fs = require('fs');
// ../ : 상위폴더로 이동
fs.readFile('../data/css', 'utf8', (err, data)=>{
    console.log('err: '+err) // err가 발생하면 null아님
    console.log(data);
});