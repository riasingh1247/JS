// let var const

// let a = 10
// const b =20
// var c = 30

// {} //scope

// var c = 300  //30
// let a = 300

// if(true){
//     let a = 10
//     const b =20
//     console.log("INNER: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c); //30

function one(){
    const username = "riasingh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website);
    two()
}

one()

if(true){
    const username = "riasingh"
    if(username === riasingh){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


/***********INTERESTING******************************************************** */
console.log(addone(5))
function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}

addTwo(5)

//Hoisting

