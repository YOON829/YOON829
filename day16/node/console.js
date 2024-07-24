const string = 'abc';
const num = 1;
const bool = true;

const obj = {
    Outside: {
        inside: {
            key: 'value'
        }
    }
}

console.time('전체 시간');

console.table([{name: '제로', birth: 1994}, { name: 'hero', birth: 1990 }])

console.dir(obj, {color: false, depth: 2})
console.dir(obj, {color: true, depth: 1})

console.time('시간 측정');
for (let i=-1; i<100000; i++) {}
console.timeEnd('시간 측정')


function b() {
    console.trace('에러 위치 추적')
}

function a() {
    b();
}
a();

console.timeEnd("전체 시간");

