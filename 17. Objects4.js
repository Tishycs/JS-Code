//  Computed Properties

// const key1 = 'obj1'
// const key2 = 'obj2'

// const value1 = 'myvalue1' 
// const value2 = 'myvalue2' 
// ----------------------------

// const obj={
//  [key1] : value1 ,
//  key2 : value2
// }
// ------------------------
// ------------------------
// ------------------------
//  const obj = {}       
//  obj [key1] = value1
//  obj [key2] = value2  

//  console.log(obj) 
// -------------------------------------------
// -------------------------------------------
//                                    spread Operator
// In Arrays
// let array1 =[1,2,3];
//  const array2 =[4,5,6];

//   const newarray =[...array1,...array2,7,8,9,10];
//     const newarray = [..."123456789","10"]
//  console.log(newarray)

// -----------------------------------------------

// In Object
const objOne ={
    num1 : 1,
    num2 : 2,
}
const objTwo ={
    num1 :'UniqueNumber',
    num3 : 3,
    num4 : 4
}


  let objThree = {...objOne,...objTwo, num5 : 5}
  console.log(objThree)

  objThree = {...objTwo,...objOne, num5 : 5}
  console.log(objThree)

  objThree = {..."123456789",9:10}
  console.log(objThree)

  objThree = {...'abcdefghijklmnopqrstuvwxyz'}
  console.log(objThree)



