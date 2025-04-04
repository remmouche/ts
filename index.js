// Annotations
// Annotations are used to specify the data type of a variable, parameter, function return value, and other types of values. Annotations help developers catch erros early in development by allowing them to specify what types of values can be assigned tp a given variables or passed or passed as an argument to a function.
// let myVar: type =value;
var var1 = 'Samy';
var1 = 'Maya';
console.log(var1);
//Type Inference
// Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TypeScript will try to infer the type based n the value you assign to it.
var tech = "TypeScript";
var favNumber = 7;
var isHard = true;
console.log(tech, favNumber, isHard);
// ERROR
//tech = 7;
// favNumber = false;
// isHard = 'true'
// any Type
// The any type is a type that allows you to assign any value to a variable.
var anyType = 'TypeScript';
anyType = 7;
anyType = false;
console.log(anyType);
var color1 = 'crimson';
color1 = 7;
color1 = false;
color1();
color1.toUpperCase();
console.log(color1);
//Function Parameter Annotations
// Function parameter annotations are used to specify the type of a function parameter. 
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
var double = function (num) { return num * 2; };
var res = double(7);
console.log(res);
//Function Return Annotations
// Function return annotations are used to specify the type of a function's return value. 
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3));
//Default Params Values
// Default parameter values are used to specify a default value for a function parameter. 
function add1(num1, num2) {
    if (num2 === void 0) { num2 = 3; }
    return num1 + num2;
}
console.log(add1(2));
var greet = function (name) {
    if (name === void 0) { name = 'anonymous'; }
    return "Salam Alikoum ".concat(name);
};
var res1 = greet('Samy');
//Object Type Annotations
// Object type annotations are used to specify the type of an object.
var person = { name: 'Samy', age: 24 };
console.log(person);
//Array Type Annotations
// Array type annotations are used to specify the type of an array. 
var arr = ['apple', 'banana', 'orange'];
console.log(arr);
//Tuple Type Annotations
// Tuple type annotations are used to specify the type of a tuple.
var tuple = ['apple', 1];
console.log(tuple);
//Enum Type Annotations
// Enum type annotations are used to specify the type of an enum.
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color);
//Union Type Annotations
// Union type annotations are used to specify the type of a union. 
var union = 'apple';
union = 1;
console.log(union);
var user = { name: 'Samy', age: 24, role: 'admin' };
console.log(user);
