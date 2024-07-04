//TypeScript
function runmore(distance: number): number {
  return distance + 10;
}

// //JavaScript
// function runMore(distance) {
//   return distance + 10;
// }

//javascirpt 입력은 name, age를 받고, 출력은 "내 이름은 누구고, 나이는 30살이야"

//JavaScript
// function printMeByJS(name, age) {
//   console.log(`내 이름은 ${name}이고, 나이는 ${age}이야`);
// }

//TypeScript
function printMeByTS(name: string, age: number): void {
  console.log(`내 이름은 ${name}이고, 나이는 ${age}이야`);
}

const testRandomNumber = (max: number, min: number): void => {
  for (let i = 0; i < 10; i++) {
    console.log(
      "1~10까지 원하는 수를 출력할 때, ",
      Math.floor(Math.random() * 10) + 1
    );
  }

  let i = 0;
  while (i < 10) {
    let check = Math.floor(Math.random() * max) + 1;
    if (check >= min) {
      console.log("min~max까지 원하는 수를 출력할 때, ", check);
      i++;
    }
  }
};

testRandomNumber(6, 3);
export {};
