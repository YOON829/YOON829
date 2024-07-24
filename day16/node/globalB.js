

//globalA에서 만든 함수를 B에서 쓰는거임


const A = require('./globalA');

global.message = '안녕하세요';

console.log(A());