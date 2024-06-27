var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// 클래스는 내부가 중요하고 이름은 별로임 아토믹함 (쪼갤수없음) 생성자도
var jill = {
    name: "jill",
    age: 12
};
var jack = {
    name: "jack",
    age: 10
};
var person = jack;
console.log(person);
