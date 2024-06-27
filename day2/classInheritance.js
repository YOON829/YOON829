// class Vehicle {
//   constructor(private wheelCount: number) {}
//   showNumberOfWheels() {
//     console.log('moved ${this.wheelCount} miles');
//   }
// }
//
// class Motocycle extends Vehicle {
//   constructor() {
//     super(2);
//   }
//
//   updateWheelCount(newWheelCount: number){
//       this.wheelCount = newWheelCount;
//
//   }
// }
//
// class Automobile extends Vehicle {
//   constructor() {
//     super(4);
//   }
// }
//
// const motorCycle = new Motocycle();
// motorCycle.updateWheelCount(6);
// motorCycle.showNumberOfWheels();
// const automobile = new Automobile();
// automobile.showNumberOfWheels();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(wheelCount) {
        this.wheelCount = wheelCount;
    }
    Vehicle.prototype.showNumberOfWheels = function () {
        console.log("moved ".concat(this.wheelCount, " wheels"));
    };
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super.call(this, 2) || this;
    }
    Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
        this.wheelCount = newWheelCount;
    };
    return Motorcycle;
}(Vehicle));
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super.call(this, 4) || this;
    }
    return Automobile;
}(Vehicle));
var motorcycle = new Motorcycle();
motorcycle.updateWheelCount(6);
motorcycle.showNumberOfWheels();
var automobile = new Automobile();
automobile.showNumberOfWheels();
