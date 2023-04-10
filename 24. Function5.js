"use strict";
// param destructuring

// Use with -> Arrays, Objects

const person = {
    gender: "Female",
    firstname:   "Tisha Gupta",
    age:     1000
} 
const person1 = {
    gender: "Female",
    firstname:   "Divy Gupta",
    age:     1000
} 

function printpersondetails(obj) {
    console.log(obj.firstname)
    console.log(obj.gender)
    console.log(obj.age)
} 
 
printpersondetails(person) 
printpersondetails(person1) 

console.log("\nInside Param : \n")

// inside param 
function printpersondetailsinsdieparam({firstname,gender,age}) {
    console.log(firstname)
    console.log(gender)  
    console.log(age) 
} 

printpersondetailsinsdieparam(person) 
printpersondetailsinsdieparam(person1) 


// Callback Functions
function myFunc(name){
 console.log("Inside Myfunc2")
 console.log("Your name is ",name)
 console.log(`Your name is  ${name}`)
 
} 

function myfunc2(Callback){  
   Callback('Tisha Gupta');
}
myfunc2(myFunc)

// function returning function

console.log("\nFunction returning Function : \n")
// const returnfunc = ()=> console.log(`Hello I'm return func function`)
// returnfunc() 

const returnfunc = ()=>{ return 1;}

const funcRetFunc= returnfunc();
console.log(funcRetFunc) 


 