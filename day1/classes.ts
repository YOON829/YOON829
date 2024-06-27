//
//
class Person {
    constructor() {
        console.log("생성자 되니?");
    }
        msg: string;
        speak(){
            console.log(this.msg);
        }
}


const tom = new Person();
tom.msg = "hello";
tom.speak();


// private
// class Person {
//     constructor(private msg: string) {   //private 은 내부 에서 접근하면 가능한데 외부에서 접근하려고하면 안됨 접근제어자임 보안을 위해
//         console.log("생성자 되니?");
//     }
//         speak(){
//             console.log(this.msg);
//         }
// }
//
// const tom = new Person("hello");
// tom.msg = "hello";
// tom.speak();
//
//
// ///readonly
// class Person {
//     constructor(private readonly msg: string) {   //readonly는 진짜 읽는거만됨
//         console.log("생성자 되니?");
//     }
//         speak(){
//             this.msg = 'test';
//             console.log(this.msg);
//         }
// }
// const tom = new Person("hello");
// tom.speak();


// getter setter

class Person {
    private message: string;
    constructor(private name: string) {}

    get Message() {
        if (!this.message.includes(this.name)) {
            throw new Error("Message is missing speaker's name");
        }
        return this.message;
    }

    set Message(val: string) {
        let tmpMessage = val;
        if (!val.includes(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.message = tmpMessage;
    }
}

const speaker = new Person("john");
speaker.Message = "hello!";
console.log(speaker.Message);