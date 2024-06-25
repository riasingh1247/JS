//Javascript is dynamically typed

// Primiive Data Type
// 7 types
//call by value

//String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null   //datatype => object
let userEmail;  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 34565736575683n

//statically typed or dynamically typed





// Non Primitive or Reference Types
//Array, Objects, Functions

const heros = ["Sid", "Vd" , "Shahid"]

let myObj = {
    name: "ria", 
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); //undefined

console.log(typeof myFunction); //function

console.log(typeof heros); //object


/*
Primitive datatypes:
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

Non-primitive datatypes:
Array - object
Function - function(object)
Object - object
*/


// *******************************************************//

/*
Stack (Primitive)=> we get copy, 

Heap memory(Non Primitive) => we get reference, all changes are made in original copy

*/

let myYoutubename = "riasingh"

let anotherName = myYoutubename
anotherName = "singhria"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ria@google.com"

console.log(userOne.email); // ria@google.com
console.log(userTwo.email); //ria@google.com

