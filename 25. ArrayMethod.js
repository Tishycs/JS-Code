"use strict";

// 1. ForEach Array Method ---> It's better version of loop 
const arr = [2, 3, 4];

// forEach with outside Function

// function multipliedby2(num,index){
//  console.log(`Index is ${index} number is ${num} when multiplied by 2 is ${num*2}`)
// }

const mul = (num, index) => console.log(`Index is ${index} number is ${num} when multiplied by 2 is ${num * 2}`)
arr.forEach(mul)

// ForEach with it's inside Function

console.log("\n Passing arguments inside for each with function \n\n")

arr.forEach(function (num, index) {
    console.log(`Index is ${index} number is ${num} when multiplied by 2 is ${num * 2}`)
})
 

// ForEach with Objects 
const user = [ 
    { firstname: "Tisha Gupta", age: 1000 },
    { firstname: "Muskan", age: 6999 },
    { firstname: "Ruchi", age: 90 },
    { firstname: "Faria", age: 2000 }
]
user.forEach(function (users) {
    console.log(users.firstname)
    console.log(users.age)
})
// with arrow func 
user.forEach(users => {
    console.log(users.firstname)
    console.log(users.age)
})


// 2. Map Array Method --> it return value in new array

console.log("\n Map Method \n\n")

const arr2 = [2, 3, 4];

const arr3 = arr2.map((num) => {
    return num * 3
})
const arr4 = arr2.map((num) => {
    console.log(num * 3)
})

console.log(arr3)


const user2 = [
    { firstname: "Tisha Gupta", age: 1000 },
    { firstname: "Muskan", age: 6999 },
    { firstname: "Ruchi", age: 90 },
    { firstname: "Faria", age: 2000 }
]

const user3 = user2.map((users, index) => {
    return ` Index is ${index} firstname is ${users.firstname} and her age is ${users.age}`
})
console.log(user3)


// 3. Filter Array Method ---> It filter and print value that we want

const Arrayelement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const elementArray = Arrayelement.filter(num => num % 2 == 0);
console.log(elementArray);

// 4. Reduce Array Method ---> Used for sum 

const elAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sum of elar 
const sum = elAr.reduce((accumulator, currentvalue) => accumulator + currentvalue)
console.log(sum);

//    accumulator,    currentvalue,    return
//    1                   2              3 
//    3                   3              6
//    6                   4              10
//    10                  5              15
//    15                  6              21
//    21                  7              28
//    28                  8              36
//    36                  9              45
//    45                  10             55 


const usercart = [
    { productId: 1, productName: "TV", price: 15000 },
    { productId: 2, productName: "Laptop", price: 22000 },
    { productId: 3, productName: "Mobile", price: 50000 }
]

const totalamount = usercart.reduce((accumulator,currentvalue)=>accumulator + currentvalue.price,0)
console.log(totalamount)



// 5. Sort Array Method ---> It sort element in order like in ascending or descending order
const stringarray = ['Abifh','Harshit','Tisha','Vanshika','Reema']
console.log(stringarray.sort());

const numArray = [394,234,74,85,86]

const arrayNumbers = [3,35,76,64,7465,467,47,4674,7,4253,56]
console.log(arrayNumbers.sort((a,b)=>a-b)) // ascending order
console.log(arrayNumbers.sort((a,b)=>b-a)) // descending order

// Low to High product 
const usercart1 = [
    { productId: 1, productName: "TV", price: 90000 },
    { productId: 2, productName: "Laptop", price: 22000 },
    { productId: 3, productName: "Mobile", price: 50000 }
]
 console.log(usercart1.sort((a,b)=>a.price-b.price))    //Low to High
 console.log(usercart1.sort((a,b)=>b.price-a.price))    //High to Low



// 6. Find Array Method  ---> Used to find element in Array

const myArray = ['dog','cat','fish','rat']
const ans = myArray.find((string)=>string.length===3) 
console.log(ans)   

const User = [
    {userId:'0fc', Username: 'Tishycs'},
    {userId:'1yu', Username: 'illenium'},
    {userId:'3hs', Username: 'minioRa'},
    {userId:'ufn5', Username: 'Fricaaaa'}
]

const findMyId= User.find((obj)=>obj.userId==='0fc')
console.log(findMyId)



// 7. Every Array Method ---> true/false (boolean) for every element
const numbers = [2,4,6,8,10,12] 
console.log(numbers.every((num)=>num%2==0)) 

const usercart2 = [
    { productId: 1, productName: "TV", price: 90000 },
    { productId: 2, productName: "Laptop", price: 22000 },
    { productId: 3, productName: "Mobile", price: 50000 }
]

const cart= usercart2.every((cartitem)=>cartitem.price<30000)  // output -> false
console.log(cart) 



// 8. Some Array Method ---> true/false (boolean) for atleast one element
const numbersEven = [1,2,3,4,5,6,7,8,9,10]
console.log(numbersEven.some((num)=>num%2==0))  
 


// 9. Fill Method ---> filling same value for continuosly inside array
// fill(value,start,end)

const myArray1 = new Array(10).fill(0); 
 console.log(myArray1)
 
const undefinedarray = ['Tisha',4,'Symbol','poetry',8]
 undefinedarray.fill('Just the two of us and everything including our number 88 too',1,2)  
 console.log(undefinedarray)  



// 10. Splice Array Method ---> used for Inserting and Deleting element in Array

//  splice (start, delete, insert) -- syntax

// delete
const myArray2 = ['dog','cat','fish','rat','Bug']
myArray2.splice(2,1) // To delete only one element I need write'1' at delete place
console.log(myArray2) 

// Insert
myArray2.splice(3,0,'Ant') // Inserting Ant on fish place and not deleting elements after that I need write '0' at delete place
console.log(myArray2)  


const myArray3 = ['Item1','Item2','Item3','Item4','Item5']  

myArray3.splice(3,2,'Inserted Item 1','Inserted Item 2') // Inserting element 2 times at third Index for two times
// myArray3.splice(3,4,'Inserted Item 1','Inserted Item 2')  // Inserting element 2 times at third and fourth Index
 
console.log(myArray3) 

// console.log("GOOD MORNING❤️")   