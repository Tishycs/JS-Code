// Function Expressions and Arrow Functions
const singHappyBirthday = () => console.log('Happy Birthday To Me......')
 
 singHappyBirthday()

// -----------------------------------------------------
const  findTarget=(array,Target)=> {
    for (let i = 0; i < array.length; i++) {
       if (array[i]===Target) {
           return i;
       }
   }  
       return -1;
   }
   const myArray= [1,34,4,67,92]
   const ans = findTarget(myArray,4) 
   console.log(ans)
// ------------------------------------------------------
const isEven = number => number%2===0; // without bracket only applicable with 1 parameter
console.log(isEven(6))
// ------------------------------------------------------