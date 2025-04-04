
// Annotations
// Annotations are used to specify the data type of a variable, parameter, function return value, and other types of values. Annotations help developers catch erros early in development by allowing them to specify what types of values can be assigned tp a given variables or passed or passed as an argument to a function.
// let myVar: type =value;
let var1: string = 'Samy';
var1 = 'Maya';
console.log(var1);

//Type Inference
// Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TypeScript will try to infer the type based n the value you assign to it.
let tech = "TypeScript";
let favNumber = 7;
let isHard= true;

console.log(tech, favNumber, isHard);
// ERROR
// tech = 7;
// favNumber = false;
// isHard = 'true'

// Any Type
// The any type is a type that allows you to assign any value to a variable.
let anyType: any = 'TypeScript';
anyType = 7;
anyType = false;
console.log(anyType);

//Function Parameter Annotations
// Function parameter annotations are used to specify the type of a function parameter. 

function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add(2, 3));

const double = (num: number): number => num * 2;
let res = double(7);
console.log(res);

//Function Return Annotations
// Function return annotations are used to specify the type of a function's return value. 
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}
console.log(multiply(2, 3));

//Default Params Values
// Default parameter values are used to specify a default value for a function parameter. 
function add1(num1: number, num2: number = 3): number {
    return num1 + num2;
}
console.log(add1(2));

const greet = (name: string = 'anonymous'): string => `Salam Alikoum ${name}`
let res1 = greet('Samy');

//Object Type Annotations
// Object type annotations are used to specify the type of an object.
let person: { name: string, age: number } = { name: 'Samy', age: 24 };
console.log(person);

//Array Type Annotations
// Array type annotations are used to specify the type of an array. 
let arr: string[] = ['apple', 'banana', 'orange'];
console.log(arr);

//Tuple Type Annotations
// Tuple type annotations are used to specify the type of a tuple.
let tuple: [string, number] = ['apple', 1];
console.log(tuple);

//Enum Type Annotations
// Enum type annotations are used to specify the type of an enum.
enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
let color: Color = Color.Green;
console.log(color);

//Union Type Annotations
// Union type annotations are used to specify the type of a union. 
let union: string | number = 'apple';
union = 1;
console.log(union);

//Intersection Type Annotations '&'
// Intersection type annotations are used to specify the type of an intersection.
type User = { name: string, age: number };
type Admin = { role: string };
let user: User & Admin = { name: 'Samy', age: 24, role: 'admin' };
console.log(user);

