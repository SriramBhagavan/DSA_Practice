const fs=require('fs');
console.log('Start reading file');
fs.readFile('test.txt', 'utf8',(err,data)=>{
    console.log(data);
});
console.log('End of file')