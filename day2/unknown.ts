


let value: unknown = 22;
value = "string value";
// value = new Array();
// val.push(33); //타입가드를 안하면 에러가생김

console.log(value instanceof Array);

if(value instanceof Array){  //val (객체) instanceof 왼쪽 피연산자(객채)가 오른쪽 피연산자(생성자 함수)의 인스턴스인지 여부 판별
    value.push("hi");
}

console.log(value);