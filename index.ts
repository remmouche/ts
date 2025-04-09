
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
//tech = 7;
// favNumber = false;
// isHard = 'true'

// any Type
// The any type is a type that allows you to assign any value to a variable.
let anyType: any = 'TypeScript';
anyType = 7;
anyType = false;
console.log(anyType);

let color1: any = 'crimson';
color1 = 7;
color1 = false;
color1();
color1.toUpperCase();
console.log(color1);


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

//Using objects as function return value
function printUser(): {name: string, age: number, enrolled: boolean} {
    return{
        name: 'Samy',
        age: 24,
        enrolled: true
    }
}

//Default Params Values
// Default parameter values are used to specify a default value for a function parameter. 
function add1(num1: number, num2: number = 3): number {
    return num1 + num2;
}
console.log(add1(2));

const greet = (name: string = 'anonymous'): string => `Salam Alikoum ${name}`
let res1 = greet('Samy');

//Void Functions
// Void functions are functions that do not return a value. Vois is a type that represnets the absence of a any value. It is often used as the return type for functions thst do not return a value.
function print(message: string): void {
    console.log(message);
    //ERROR
    //return 'mesage'
}
print('Hello, world!');

//never keyword
// The never keyword is a type that represents the type of values that never occur. It is often used as the return type for functions that never return a value.
function error2(message: string): never {
    throw new Error(message);
}   
error2('error');


//Function Overloading
// Function overloading is a feature in TypeScript that allows you to create multiple functions with the same name but different parameter types.
function add2(num1: number, num2: number): number;
function add2(num1: string, num2: string): string;
function add2(num1: number | string, num2: number | string): number | string {

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}
console.log(add2(2, 3));
console.log(add2('2', '3'));

//Never keyword
// The never keyword is a type that represents the type of values that never occur. It is often used as the return type for functions that never return a value.
function error(message: string): never {
    throw new Error(message);
}   
error('error');

//Array Type Annotations
//New Syntax With []
// Array type is a type that represents an array of values of a specific type.
let arr1: number[] = [1, 2, 3];
console.log(arr1);

//Old Syntax With <>
let array2: Array<string> = [];
array2= ['apple', 'banana', 'orange'];
console.log(array2);

//Multi Dimensional Array
// Multi-dimensional arrays are arrays of arrays.
let arr3: number[][] = [[1, 2, 3], [4, 5, 6]];
let array4: number [][][] = [[[1, 2, 3]], [[4, 5, 6]]];
console.log(arr3);

//Objects Type Annotations
//An bject in TypeScript is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have SPECIFIC TYPES, and the object itself can be annotated with type , often defined using an interface or a type alias. TypeScript uses structural typing to determine the type of an object based on its shape and the types of its properties.

const person7 :{firstName: string, lastName: string, age: number} = {
    firstName: 'Samy',
    lastName: 'Remmouche',
    age: 24
}
// Even though person wasn't declared as type User, it’s assignable because it has the same structure.
type User1 = {
    name: string,
    age: number
}
let person3 = {
    name: 'Samy',
    age: 24 
}
let user33: User1 = person3;


//Type Aliases 
// Type aliases are used to create a new name for a type. They can be used to define a new type that is based on an existing type.
type StringOrNumber = string | number;

type admin ={userName: string, password: string}

function printUser1(user: admin) {
    console.log(user.userName, user.password);
}

const admin1: admin = {
    userName: 'Samy',
    password: '123'
}
printUser1(admin1);


//Optional Properties
// Optional properties are properties that can be missing from an object. They are denoted by a question mark (?) after the property name. 
type User21 = {
    name: string,
    age: number,
    role?: string
}
let user22: User21 = {
    name: 'Samy',
    age: 24 
}

//readonly Properties
// Readonly properties are properties that cannot be changed after they are assigned. They are denoted by the readonly keyword.

type Info = {
    firstName: string, readonly lastName: string, age: number
}
const myInfo: Info = {firstName: 'Samy', lastName: 'Remmouche', age: 24}
myInfo.lastName = 'Maya'


//Intersection Types
//An intersection type is a way to COMBINE MULTIPLE TYPES into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the '&' operator.

type Person10 = {name: string, age: number}
type Job = {jobTitle: string, salary: number}
type Employee = Person10 & Job
const employee: Employee = {name: 'Samy', age: 24, jobTitle: 'Software Engineer', salary: 50000}    


//Unions Types
// Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a varible or parameter to accept MULTIPLE TYPES. Unions are denoted by the pipe '|' operator.

type StringsOrNumbers = string | number;
function printId1(id: StringOrNumber) {
    console.log(id);
}
printId1('123');
printId1(123);

let password: string | number = 20;
type UserInfo3 = {
    firstName: string, lastName: string, age: number}
type accountDetails = {email: string, password: string | number}    
const user77: UserInfo3 | accountDetails = {
    firstName: 'Samy',
    lastName: 'Remmouche',
    age: 24,
    email: 'DfV5l@example.com',
    password: 123}

const items:(number | string)[] = [1, 'apple', 2, 'banana', 3, 'orange']


//Literal Types
// Literal types are used to specify a specific value for a variable or parameter. Literal types are denoted by the type keyword followed by the value of the literal.
type Direction = 'up' | 'down' | 'left' | 'right';

let mycolor : 'green' | 'white' | 'red';
mycolor = 'green';
// mycolor = 'yellow'; //error


//Tuples
//Tuple is a type that represents an array with a FIXED NUMBER OF ELEMENTS AND EACH ELEMENT HAS A SPECIFIC TYPE. Tuples are denoted by the tuple keyword followed by the types of the elements in the tuple, separated by a comma. The order of the types in the tuple definition corresponds to the order of the vlues in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lenhts.

let myTuple: [string, number, boolean] = ['Samy', 24, true];
console.log(myTuple[0]); // Samy
console.log(myTuple[1]); // 24
console.log(myTuple[2]); // true

//Destructuring Individual Element
let [myName, age, isAdmin] = myTuple;
console.log(myName); // Samy
console.log(age); // 24
console.log(isAdmin); // true

let myTuple2: [number, string]
myTuple2 = [1, 'Samy'];
//myTuple2 = ['maya', 2]; //Error


//Enums
//Enum is a way to define a set of NAMED CONSTANTS. Enums allow you to define a collection of related value that can be used interchangeably in your code.

enum EwatherConditions{
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy',
    Stormy = 'stormy'
}

let todayWeather: EwatherConditions = EwatherConditions.Rainy;
console.log(todayWeather); //rainy


//OOP Classes
//Classes are a way to define a blueprint for creating objects. Classes allow you to define properties and methods that are shared by all instances of the class.

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }       
}
