// function sayMyName(){
//     console.log("R");
//     console.log("I");
//     console.log("A");
// }

// sayMyName()

// // sayName => is a reference

// function addTwoNumbers(num1, num2){
//    console.log( num1 + num2);
// }

// addTwoNumbers() //arguments not given

// addTwoNumbers(3,4) //7
// addTwoNumbers(3, "4") //34
// addTwoNumbers(3, null) //3

// //parameters, arguments

// // function addTwoNumbers(num1, num2){
// //     let result = num1 + num2
// //     return result

// //  }


// // no console.log value gets printed after result

// function addTwoNumbers(num1, num2){
//     return num1 + num2
//  }

//  function loginUserMessage(username){
//     return `${username} just logged in`
//  }

// console.log((loginUserMessage("Ria"))); 

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Kindly Enter the Username");
//         return
//     }
//     return `${username} just logged in`
//  }

//  function loginUserMessage(username){
//     if(!username){
//         console.log("Kindly Enter the Username");
//         return
//     }
//     return `${username} just logged in`
//  }

 
//  function loginUserMessage(username = Singh){
//     if(!username){
//         console.log("Kindly Enter the Username");
//         return
//     }
//     return `${username} just logged in`
//  }

//  console.log(loginUserMessage());
 

function calculateCartPrice(...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500)); //returns arr

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "ria",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



