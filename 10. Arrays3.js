// How to clone array and concatenate it with after pushing 


let array1 = [6,7]
// let array2 = [6,7] 
// let array2 = array1.slice(1) {use to clone array into array}
// let array2 = array1.slice(1).concat([8,9]) //{use to add another items }
//   let array2 = [].concat(array1,[8,9]) 

// slice is more faster than spread operator

// spread operator
// let array2 = [...array1]
let onemoreArray= ['Ten','eleven']
 /* for concatenating */  let array2 = [...array1, onemoreArray]


// removing mutability and virus after pushing in arr2
array1.push("eight")
console.log(array1===array2)
console.log(array1)
console.log(array2)
