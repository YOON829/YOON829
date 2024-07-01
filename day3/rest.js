
function doSomething(a, ...others) {
    // ...ohters - [2,3,4,5,6,7];
    console.log(a, others, others[others.length - 1]);
    // a는 1나오고 /  others는 234567 / others.length -1 : 배열의 제일 마지막값
}

doSomething(1,2,3,4,5,6,7);