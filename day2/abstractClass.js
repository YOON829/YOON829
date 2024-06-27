//
// namespace AbstractNamespace{
//     abstract class Vehicle {
//   constructor(protected wheelCount: number) {}
//   showNumberOfWheels() {
//     console.log(moved ${this.wheelCount});
//   }
// }
//
// class Motocycle extends Vehicle {
//   constructor() {
//     super(2);
//
//   updateWheelCOunt(newWheelCount: number): void {
//    this.wheelCount = newWheelCount;
//    console
//   }
//   }
//
//   updateWheelCount(newWheelCount: number) {
//     this.wheelCount = newWheelCount;
//   }
// }
//
// motorCycle.updateWheelCount(6);
// motorCycle.showNumberOfWheels(); //expect moved 6
//
//
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
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(wheelCount) {
            this.wheelCount = wheelCount;
        }
        Vehicle.prototype.showNumberOfWheels = function () {
            console.log("moved ".concat(this.wheelCount, " miles"));
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
            console.log("Motorcycle has ".concat(this.wheelCount));
        };
        return Motorcycle;
    }(Vehicle));
    var Automobile = /** @class */ (function (_super) {
        __extends(Automobile, _super);
        function Automobile() {
            return _super.call(this, 4) || this;
        }
        Automobile.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has ".concat(this.wheelCount));
        };
        Automobile.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount, " miles"));
        };
        return Automobile;
    }(Vehicle));
    var motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    var autoMobile = new Automobile();
    autoMobile.updateWheelCount(3);
})(AbstractNamespace || (AbstractNamespace = {}));
