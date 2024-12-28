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
var fname = "Angular type script";
console.log(fname);
var value = 33;
console.log(value);
var myname = "shivanand Nagarabetta";
console.log(myname);
console.log("auto save checking");
console.log("auto save checking.. continee!");
//litral with primitive data type anoptaion
var username = "Alice";
console.log(username);
var age = 30;
console.log(age);
var isStudent = true;
console.log(isStudent);
// Array
var hobbies = ["reading", "coding", "gaming"];
console.log(hobbies); // Tuple
var address = ["Main Street", 123];
console.log(hobbies);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log(favoriteColor);
var empdetails = {
    fname: "sandeep",
    id: 113,
    age: 38,
    exemp: true
};
console.log(empdetails);
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Car.prototype.start = function () {
        console.log("car started");
    };
    return Car;
}());
var rCar = new Car("renault", "kwid");
console.log(rCar);
var mCar = new Car("Mahendra", "Thar");
console.log(mCar);
// function with name and without name
function greet(name) {
    return "study typescript with me" + name;
}
var greets = greet("sandeep");
// abstract class
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    // Concrete method
    Shape.prototype.printColor = function () {
        console.log("Color: ".concat(this.color));
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, height) {
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle("red", 5);
console.log(circle.getArea()); // Output: 78.53981633974483
circle.printColor(); // Output: Color: red
var rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea()); // Output: 24
rectangle.printColor(); // Output: Color: blue
var empDtl = ["sandeep", 123];
//function
function greetwell(name) {
    return "Hello, " + name + "!";
}
var message = greetwell("John");
console.log(message); // Output: "Hello, John!"
// Function Parameters
//Required Parameters: Parameters that must be provided when calling the function.
//Optional Parameters: Parameters that can be omitted when calling the function. They are denoted by a ? after the parameter name.
function add(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
var sum1 = add(5, 3); // sum1 is 8
var sum2 = add(5); // sum2 is 5
//Return Type
function logMessage(message) {
    console.log(message);
}
var admin = {
    name: "John Doe",
    role: "admin"
};
var id = "123";
id = 456;
var direction = "Up";
var usernamef = "undefined";
console.log(typeof (usernamef));
