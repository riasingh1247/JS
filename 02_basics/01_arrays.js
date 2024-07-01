const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["sid", "vd"]

const myArr2n= new Array(1,2,3,4)
// console.log(myArr[0])

//Shallow copies - pass by reference
//Deep copies - 

//Js arrays are resizable and may have different datatypes

//Methods
// myArr.push(6)
// myArr.push(6)
// myArr.pop(6)

// myArr.unshift(0) //add values for start
// myArr.unshift(0) //added value gets removed

// console.log(myArr.includes(9)); //boolean type
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  //converted to string

// console.log(myArr);
// console.log(newArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr); //original array gets manipulated
console.log(myn2);



