
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
//Classes are a way to define a blueprint for creating objects. Classes allow you to define properties and methods that are shared by all instances of the class. You can annotate class properties with a type. this allows you to define the daata type of the property and ensure that it is always consistent across all instances of the class.

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }       
}


//Access Modifiers
//In TypeScript, access modifiers are used to control the accessibility of class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class .There are three access modifiers in TypeScript: public, private, and protected.

//Public: Memebers marked as public can be accessed from anywhere, both inside and outside the class.
//Private: Members marked as private can only be accessed from within the class they are defined in.
//Protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses of that class(subclasses that extend the class).

class Humain{
    public firstName: string
    private lastName: string
    protected age: number

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    getLastName(){
        return this.lastName
    }

    // getAge(){
    //     return this.age
    // }
}

const samy = new Humain('Samy', 'Remmouche', 24);
console.log(samy.firstName);
console.log(samy.getLastName);
console.log(samy.lastName)
console.log(samy.age)


class Person1 extends Humain{
    constructor(firstName: string, lastName: string, age: number){
        super(firstName, lastName, age)
    }

    getAge(){
        return this.age   
    }
}

const mohamed = new Person1('Mohamed', 'Remmouche', 24);
console.log(mohamed.firstName);
console.log(mohamed.getLastName);
console.log(mohamed.lastName)
console.log(mohamed.getAge)


//Getters and Setters
//Getters and Setters are used to access and modify class properties. Getters and setters alllow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting adn setting the value.

class Person2 {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
}

const me = new Person2('Samy');
console.log(me.name); // Samy
me.name = 'Mohamed';
console.log(me.name); // Mohamed


//Interface
//Interface is a way to define a CONTRACT for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structire in your code. While interfaces are commonly used to define the structure of objects, they are not limited  to just objects. Interfaces in TypeScript can also be used to DESCRIBE THE SHAPE of functions and classes.

interface Person3 {
    name: string;
    age: number;
    role: string;
}

const person4: Person3 = {
    name: 'Samy',
    age: 24,
    role: 'Developer'
}

console.log(person4);

//Interface for a function
interface MathOperation {(x: number, y: number): number;}

//Usage
const add5: MathOperation = (x, y) => x + y;
const multiply5: MathOperation = (x, y) => x * y;
const subtract5: MathOperation = (x, y) => x - y;

console.log(add5(2, 3)); // 5
console.log(multiply5(2, 3)); // 6
console.log(subtract5(2, 3)); // 1

//example2
interface Person11{firstName: string, lastName: string, greeting(): void}
function greet1(person: Person11) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
    person.greeting();
}

const samishou: Person11={
    firstName: 'Samy',
    lastName: 'Remmouche',
    greeting(){console.log('Hello!')}
}
greet1(samishou)

//Interface for a class
interface Vehicle{
    start():void;
    stop():void;
}

//Class implementing the interface
class Car implements Vehicle{
    start(){
        console.log('Car started');
    }
    stop(){
        console.log('Car stopped');
    }
}

//Usage
const myCar = new Car();
myCar.start(); // Car started
myCar.stop(); // Car stopped



//Declatation merging
//Once an interface is declared, it cannot be directly modified. However, TypeScript allows what is informally reffered to as "declaration merging" or "interface extension", which is often misconstrued as "re-opening."
//Declaration merging in TypeScript refers to the ability to extend or augment an existing declaration, including interfaces. this can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration.

interface Person4 {
    name: string;
    age: number;
    role: string;
}

interface Person4 {
    email: string;
    phone: number; 
}

const person5: Person4 = {
    name: 'Samy',
    age: 24,
    role: 'Developer',
    email: 'BfD9S@example.com',
    phone: 123456789
}

//Interface Inheritance
//Interfaces can also inherit from other interfaces using the extends keyword. This allows you to create a new interface that extends an existing interface, inheriting its properties and methods.     


interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(): string | number
}

interface MovieGenra extends MovieDetails {
    genra: string;
}

const movie1: MovieGenra = {
    name: 'The Shawshank Redemption',
    ratings: 9.3,
    genra: 'Drama',
    printMovieInfo()  {
        return `Movie Nmae:${this.name} Price: ${this.price} Ratings: ${this.ratings}`;
    }
}

//Generics
//In TypeScript, generics allow you to create reusable components that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code.

function identity<T>(value: T): T {
    return value;
}

//example1
//Regular function before refactoring
const printString = (x: string)=>console.log(x);
const printNumber = (x: number)=>console.log(x);
const printBoolean = (x: boolean)=>console.log(x);

printString('Hello');
printNumber(3);
printBoolean(true); 

function printInfo<T>(x: T): T {
    return x
  }
//refactoring with generics
function printValue<T>(x: T) {
    console.log(x);
  }
  
  printValue<string>('Hello');
  printValue<number>(3);
  printValue<boolean>(true);


  //example2
  function getRandomKeyValuePair<T>(obj: {[key: string]: T}):{
    key: string;
    value: T;
  }{
const keys = Object.keys(obj);
const randomIndex = Math.floor(Math.random() * keys.length);
const key = keys[randomIndex];
const value = obj[key];
return { key:key, value:value };
  }

  const stringObject = { a: 'apple', b: 'banana', c: 'cherry' };
  const randomStringPair = getRandomKeyValuePair(stringObject);
  console.log(randomStringPair);    

  const numberObject = { a: 1, b: 2, c: 3 };
  const { key, value } = getRandomKeyValuePair(numberObject);
  console.log(`Random key: ${key}, Random value: ${value}`);

  //example3
  function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[]{
  return arr.filter(item => condition(item))
}

const arrNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function oddNumber(item: number){
    return item % 2 !== 0
}

const oddNumbers = filterArray<number>(arrNumbers, oddNumber)
console.log(oddNumbers)

const stringArr = ['apple', 'banana','orange', 'fig', 'grape', 'kiwi']
const shortWords = filterArray<string>(stringArr, word => word.length < 5)

console.log(shortWords)

//Generics with multiple types
function reversePair<T, U>(value1: T, value2: U) : [U,T]{
    return [value2, value1];
}

const reversedPair = reversePair<string, number>('apple', 2);
console.log(reversedPair);

//Generics with class
class Box<T> {
    private content : T;

    constructor(initialContent: T){
        this.content = initialContent
    }

    getContent(){
        return this.content
    }

    setContent(newContent: T){
        this.content = newContent
    }
}

const box1 = new Box<string>('apple');
console.log(box1.getContent());
box1.setContent('banana');
console.log(box1.getContent());

const box2 = new Box<number>(7);
console.log(box2.getContent());
box2.setContent(8);
console.log(box2.getContent());


//Type Narrowing
//Type narrowing is the process of refining a varible's type within a conditional block of code. this allows you to write more precide and type -safe code. TypeScript provides several mechanisms for narrowing types, including type guards, type instanceof operator, and intersection types.

//Type guards
//Type guards are mechanisms that help TypeScript understand and narrow the types more precisely. One common type guard is the typeof operator.
type MyType = string | number
function printInfo7(info: MyType): void{
    if(typeof info === 'string'){
        console.log(`String: ${info.toUpperCase()}`);
    }else if(typeof info === 'number'){
        console.log(`Number: ${info.toFixed(2)}`);
    }
}

printInfo7('Salam Alikoum'); //SALAM ALIKOUM
printInfo7(3.14159); //3.14

//Type instanceof operator
//The instanceof operator is another type guard in TypeScript that allows you to check whether an object is an instance of a particular class or constructor function.

class Person25 {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Employee25 extends Person25 {
    jobTitle: string;
    constructor(name: string, jobTitle: string) {
      super(name);
      this.jobTitle = jobTitle;
    }
  }
  
  function printInfo8(info: Person25 | Employee25): void {
    if (info instanceof Employee25) {
      console.log(`Employee: ${info.name} - ${info.jobTitle}`);
    } else if (info instanceof Person25) {
      console.log(`Person: ${info.name}`);
    }
  }
  
  const person27 = new Person25('Samy');
  const employee27 = new Employee25('Samy', 'Developer');
  
  printInfo8(person27); // Person: Samy
  printInfo8(employee); // Employee: Samy - Developer  

  //Intersection Types
  //Intersection types are used to combine multiple types into a single type that is a combination of those types. Intersection types are denoted by the & operator.
  type MyType1 = string & number