function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("A");
}

sayMyName()

// sayName => is a reference

function addTwoNumbers(num1, num2){
   console.log( num1 + num2);
}

addTwoNumbers() //arguments not given

addTwoNumbers(3,4) //7
addTwoNumbers(3, "4") //34
addTwoNumbers(3, null) //3

//parameters, arguments

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result

//  }


// no console.log value gets printed after result

function addTwoNumbers(num1, num2){
    return num1 + num2
 }

 function loginUserMessage(username){
    return `${username} just logged in`
 }

console.log((loginUserMessage("Ria"))); 

function loginUserMessage(username){
    if(username === undefined){
        console.log("Kindly Enter the Username");
        return
    }
    return `${username} just logged in`
 }

 function loginUserMessage(username){
    if(!username){
        console.log("Kindly Enter the Username");
        return
    }
    return `${username} just logged in`
 }

 
 function loginUserMessage(username = Singh){
    if(!username){
        console.log("Kindly Enter the Username");
        return
    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage());
 
 

