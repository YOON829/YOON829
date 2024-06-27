//
// function eat (calories: number):  {
//     console.log("I ate" + calories + "calories");
// }
// 반환값이 없어서 안됨 ex)number라던가 string이라던가
// function eat(calories: number): string {
//     return "I ate " + calories + " calories";
// }  이렇게 하면 나옴
//
// eat 함수와 sleepIN 함수는 반환 타입이 명시되지 않았고, 어떤 값도 반환하지 않으므로 호출 결과로는 undefined가 나오게 됩니다.
//     이는 변수에 할당된 후에도 undefined가 유지되어 console.log로 출력할 때도 undefined가 출력되는 것입니다.
// function sleepIN(hours: number): void {
//     console.log("I slept" + hours + "hours");
// }
//
// let ate = eat(100);
// console.log(ate);
// let slept =sleepIN(10);
// console.log(slept);
function eat(calories) {
    return "I ate " + calories + " calories";
}
function sleepIN(hours) {
    return "I slept " + hours + " hours";
}
var ate = eat(100); // 정상적으로 문자열을 할당
console.log(ate);
var slept = sleepIN(10); // 정상적으로 문자열을 할당
console.log(slept);
