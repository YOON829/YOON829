

namespace OptionalChainingNS {
    interface Wheels {
        count?: number;
    }

    interface Vehicle {
        wheels?: Wheels;
    }

    class Automobile implements Vehicle {
        constructor(public wheels?: Wheels) {

        }
    }

    const car: Automobile | undefined = new Automobile({
        count: undefined
    });
    console.log("car ", car);
    console.log("wheels ", car?.wheels);
    console.log("count ", car?.wheels?.count);

    // const count = !car ? 0
    // : !car.wheels ? 0
    // : !car.wheels.count ? 0
    // : car.wheels.count;
}
// value =  (조건) ? statment1 참일떄는 앞에게 돌아가고 statment2; 거짓일떈 가 돌아감
// vlaue = 삼항연산자

//널일떄는 뒤에값이 들어감