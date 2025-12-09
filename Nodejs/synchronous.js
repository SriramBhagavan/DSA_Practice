const fs=require('fs');
console.log('Start reading file');
const data=fs.readFileSync('test.txt', 'utf8');
console.log(data);
console.log("End of file");