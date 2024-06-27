

function oldEnough(age: number): never | boolean {
    if(age>59) {
        throw Error("Too old!");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
//
// if (age>59) {
//     return true;
//     }    else if (age <= 18) {
//         return false;
//     }
//     return true;
// }



// 아래는 위에서 참이면 else if는 건너뛰고 리턴으로 가고
// 위는 참이면 다시 if문도 체크하고 넘어감