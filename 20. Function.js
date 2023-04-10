function singHappyBirthday()
{
    console.log('Happy Birthday To Me......')
}
 singHappyBirthday()


 
function Sum(num1,num2) {
    return num1 + num2
} 
const Returnedvalue = Sum(223,54);
console.log(Returnedvalue);

// EXAMPLE
// IS ODD OR EVEN 
function isEven(EVEN) {
if (EVEN%2===0) {
   return(true);
} else {
    return(false);
}
}
console.log(isEven(6))
console.log(isEven(9))


// Find Character 
function firstcharacter(string) {
    return string[1];
}
console.log(firstcharacter('Tisha'))


function findTarget(array,Target) {
 for (let i = 0; i < array.length; i++) {
    if (array[i]===Target) {
        return i
    }
}  
    return -1
}
const myArray= [1,34,4,67,92] 
const ans = findTarget(myArray,4) 
console.log(ans) 




