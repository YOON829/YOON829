

class Person {
    name : string;
    age : number;
}

// 클래스는 내부가 중요하고 이름은 별로임 아토믹함 (쪼갤수없음) 생성자도


const jill : { name: string, age: number}  ={
    name : "jill",
    age : 12
};


const jack : Person ={
    name : "jack",
    age : 10
};

const person: Person = jack;
console.log(person);
