//Objects and Events are the most important part of JS

//singleton - made with constructors
//Object.create - constructor

//Object Literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Ria", //considered string 
    "full name" : "Ria Singh",
    [mySym] : "mykey1", //square brc is the syntax for symbol, else considered string
    age: 18,
    email: "riasingh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

} //curly brace - object

// console.log(JsUser.email)
// console.log(JsUser["email"]) //taken as string
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "singhria@gmail.com" //overidden

////Object.freeze(JsUser)

JsUser.email = "riasingh@yahoo.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Namaste, JS User");
}

console.log(JsUser.greeting());

console.log(JsUser.greeting); //function reference

JsUser.greetingTwo = function(){
    console.log(`Namaste, ${this.name}`);
}

console.log(JsUser.greetingTwo());






