//Immediately Invoked Function Expression(IIFE)
//Used to remove the pollution form Global Scope

// function coffee(){
//     console.log(`DB Connected`);
// }

// coffee()

(function coffee(){ //named iife
    console.log(`DB Connected`);
})();

/* () function () definition */

((name) => {
    console.log(`DB CONNECTED TO`);
} ) ();

// ;=>seperator





