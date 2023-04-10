let hername= "tisha";
let age= 18;



// finding datatype of string
 console.log( typeof age)


// convert string to number
age=  age + ""
console.log( typeof age)


// convert string to number
hername= +"tisha";
console.log( typeof hername)

age='18'
age= Number(age)
console.log( typeof age)

// string concatenation
// // // let string1 ="Tisha";
// // // let string2 ="Gupta";
// // // let newstring = string1 + " " + string2
// // // console.log( newstring)

// with numbers
let string1 ="17";
let string2 ="19";

let newstring = +string1  +  +string2
console.log(  newstring)



// template string
let herage = 22;
let firstname = "kanyewest";

// my name is kanye west and my age is 22
// let aboutme= ("my name is" + firstname + " my age is " + herage);
// console.log(aboutme)

//using template string make it easier to write
// In template string we add variables in ${} and whole sentence in tectics ``
let aboutme=`my name is ${firstname}  and my age is ${herage}`;
console.log(aboutme); 




// undefined
let namename;
console.log(typeof namename)
namename="wanda"
console.log( namename,typeof namename) 

// null
let myvariable=null;
console.log(myvariable)
myvariable="tisha"
console.log(myvariable,typeof myvariable)
//but
console.log(typeof null)
// kuz it's bug error in javascript and you can't change it if you try to change all js
//framework and script will not work

// BigInt
// we can save infinite no.s in BigInt
// we can't use BigInt with other datatypes
let mynumber=BigInt(34567)
let mynumber2=135n
console.log(mynumber + mynumber2) 
console.log(typeof mynumber,typeof mynumber2)

////////////////////////////////////////////////////////////////////////////////

//booleans and comparison operator

// booleans
// I love boolean it doesn't confuse you like dark series 
// false is false and truth is true

// '==' and '==='
// and also it doesn't care about datatype it believes in unity '==' 
// but if you still wanna consider gender and act mysgyonist pseudo femo then u can use '==='

let num1=7 , num2= "7" ;

// console.log(num1 == num2);
// console.log(num1 === num2);

// greater than, smaller than or smaller or greater whatever sometimes plate portion does matter good for health I'm not racist
// console.log(num1 <= num2);
// console.log(num2 >= num1);

//  '!=' and '!=='
// it's act opposite like mirror world truth is false and false is true 
// to check datatype too we should use '!==' or otherwise '!=' spread unity
console.log(num2 != num1);
console.log(num1 !== num2);









  