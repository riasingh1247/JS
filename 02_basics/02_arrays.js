const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["flash", "superman", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); //Array taken as data
// console.log(marvel_heros[3][1]);

// 'thor', 'ironman', 'spiderman', [ 'flash', 'superman', 'batman' ] ] => fourth elemnt

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//push pushes into existing array, concat creates a new array.

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);  //mostly used

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("riasingh"))
console.log(Array.from("riasingh"))
console.log(Array.from({name: "riasingh"})) //empty array => interesting 

let score1= 100
let score2= 100
let score3= 100

console.log(Array.of(score1, score2, score3));
 //creates


