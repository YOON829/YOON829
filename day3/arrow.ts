

// function MyFunction () {
//     console.log(this);
// }
//
// MyFunction();
// let test = new MyFunction();

// 일반함수
// function myFunc(message: string, title: string, age: number): boolean {
//     console.log(message);
//     console.log(title);
//     console.log(age);
//     return true;
// }
//
// myFunc("hello", "myFirstArrowFunc", 30);


// 화살표함수
const myFunc = (message: string, title: string, age: number) :boolean => {
    console.log(message);
    console.log(title);
    console.log(age);
    return true;

}
myFunc("hello" , "myFirstArrowFunc" , 30);
// (console.log("func"));

const func = () => console.log('func');
const func1 = () => ({name: 'dave'});
const func2 = () => {
    const val =20;
    return val;
};

console.log(func());
console.log(func1());
console.log(func2());