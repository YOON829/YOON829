
//
// amespace NamespaceA {
//     class A {
//         aname: string = "A";
//     }
//     class B {
//         bname: string = "B";
//     }
//
//     const a = new A();
//     const b = new B();
//     const c = { ...a, ...b }
//     const d = Object.assign(a, b);
//     console.log(c);
//     console.log(d);
//
//     a.aname = "a1";
//     console.log(c); //는 새로운 객체가 만들어짐
//     console.log(d); //얼라이언싱 원래있던 변수값을 바라보는것
// }

//A 를 객체화 시키는거

namespace NamespaceA {
    class A {
        aname: string = "A";
    }
    class B {
        bname: string = "B";
    }

    const a = new A();
    const b = new B();

    // Spread 연산자를 사용한 객체 병합
    const c = { ...a, ...b };
    // Object.assign을 사용한 객체 병합
    const d = Object.assign(a, b);

    console.log(c);
    console.log(d);

    a.aname = "a1";
    console.log(c); // Spread 연산자를 사용한 경우, 새로운 객체가 생성됨
    console.log(d); // Object.assign을 사용한 경우, 원래 객체의 값이 변경됨
}
