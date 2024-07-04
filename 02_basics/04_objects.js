// const facebookUser = new Object()  -> singleton
const facebookUser = {}   //both have same o/p but 1st is singleton

facebookUser.id = "123abc"
facebookUser.name = "Ria"
facebookUser.isLoggedIn = false;

// console.log(facebookUser);

const regularUser = {
    email: "ria@gmail.com",
    fullname : {
        userfullname: {
            firstname: "ria",
            lastname:  "singh"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); // ? is used for if else condition

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // {} is an optional parameter

// const obj3 = {...obj1, ...obj2}
// //console.log(obj3);

const users = [
    {
        id: 1,
        email: "riasingh@gmail.com"
    }
]

// users[1].email
console.log(facebookUser);

console.log(Object.keys(facebookUser)); //datatype -> array
console.log(Object.values(facebookUser));
console.log(Object.entries(facebookUser))

console.log(facebookUser.hasOwnProperty('isLoggedIn')); //true
