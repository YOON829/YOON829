var A;
(function (A) {
    var FirstClass = /** @class */ (function () {
        function FirstClass() {
        }
        return FirstClass;
    }());
})(A || (A = {}));
var B;
(function (B) {
    var SecondClass = /** @class */ (function () {
        function SecondClass() {
        }
        return SecondClass;
    }());
    var test = new FirstClass();
})(B || (B = {}));
