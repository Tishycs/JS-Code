// LOOPS IN ARRAYS

// -----------------------------------------
const fruits = ["papaya","berries","mango"]
// -----------------------------------------
// -----------------------------------------
// WITH FOR LOOPS
for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i].toUpperCase());
    }
// -----------------------------------------------------
 const fruits2=[]   
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase())
  console.log(fruits2)
}
// -----------------------------------------------------
// -----------------------------------------------------
// WITH WHILE LOOPS
let i=0
const fruits3= [...fruits,'grapes']
while (i<fruits3.length) {
    console.log(fruits3[i].toUpperCase())
    i++
}
// -----------------------------------------------------
// -----------------------------------------------------
// WITH FOR IN LOOPS
const fruits4=[];
for (index in fruits) {
 console.log(fruits[index]);
}
// -----------------------------------------------------
// -----------------------------------------------------





















