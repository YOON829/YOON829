var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    console.log("car ", car);
    console.log("wheels ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("count ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
    // const count = !car ? 0
    // : !car.wheels ? 0
    // : !car.wheels.count ? 0
    // : car.wheels.count;
})(OptionalChainingNS || (OptionalChainingNS = {}));
// value =  (조건) ? statment1 참일떄는 앞에게 돌아가고 statment2; 거짓일떈 가 돌아감
// vlaue = 삼항연산자
//널일떄는 뒤에값이 들어감
