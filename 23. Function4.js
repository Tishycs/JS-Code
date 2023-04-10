// Default Parameters
// function add(a,b=0){
//   return a+b 
// }
// console.log(add(3))
// console.log(add(3,6))

// Rest Parameters
// function add(...allnumbers){
//     let total = 0
//     for(const numbers of allnumbers){
//         total = total + numbers
//     }
//     return total
//   }
//   const answer = add(2,3,4)
//  console.log(answer) 
// ---------------------------------------------
function myFunc(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}
myFunc(1,2,3,4,5,6,7,7,8,9,10)



