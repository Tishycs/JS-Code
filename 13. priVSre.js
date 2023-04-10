//  Primitive Datatype VS Reference Datatype

// primitive types
// It is not mutable kuz it's store in stack
 let num1 = 8;
 let num2 = num1;
 console.log("value of num1 is",num1)
 console.log("value of num2 is",num2)
 num1++
 console.log("after incrementing num1") 
 console.log("value of num1 is",num1)
 console.log("value of num2 is",num2)

// ---------------------------------------------------------

//  reference types
//  array - it is mutable kuz its located in heap
 let array1 = [6,7]
 let array2 = array1
  console.log("value of array1 is",array1)
  console.log("value of array2 is",array2)
 array1.push(8)
 console.log("after pushing array1")
 console.log("array1 is",array1)
 console.log("array2 is",array2)                                    


