//THIS : tells about current context
/*
const user = {
    username: "riasingh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage() //riasingh, welcome to website

*/
//Global Object in Browser is window obj.

// this returns {}

// function coffee(){
//     console.log(this);
// }
// coffee()

/*
function coffee(){
    let username = "riasingh"
    console.log(this.username);
}
coffee() 

UNDEFINED
*/

// const coffee = function(){
//     let username = "riasingh"
//     console.log(this.username)
// }

// coffee()

// const coffee = () => {  //function replaced with () =>
//     let username = "ria"
//     console.log(this.username);
// }

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))

/*
//Implicit Return

const addTwo = (num1, num2) => num1 + num2
*/

//Object is always in paranthesis


