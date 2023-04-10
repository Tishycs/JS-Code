   // ARRAYS DESTRUCTRING
const myArray = ['value1','value2','value3','value4']
// -----------------------------------------------------
// let var1 = myArray[0]
// let var2 = myArray[2]
// console.log('value of my array 1 is',var1)
// console.log('value of my array 2 is',var2)  
// -----------------------------------------------------
// -----------------------------------------------------
// A.D. METHOD
//  let[var1,var2]= myArray
// console.log('value of my array 1 is',var1)
// console.log('value of my array 2 is',var2)
// -----------------------------------------------------
// -----------------------------------------------------
// using spread operator concate rest arrays
// let[var1,var2, ...myNewArray]= myArray
// console.log('value of my array 1 is',var1)
// console.log('value of my array 2 is',var2)
// console.log('value of my new array is',myNewArray)
// -----------------------------------------------------
// -----------------------------------------------------
//  using slice method
//  let[var1,var2]= myArray.slice(2)
//  console.log('value of my array 1 is',var1)
// console.log('value of my array 2 is',var2)
// ------------------------------------------------------------------
let[var1]= myArray.slice(3)
console.log('value of my array is',var1)
// -----------------------------------------------------
// -----------------------------------------------------