"use strict";

// clone using Object Assign 

const obj = {
   "key1" : "value2",
    key2  : 'value1'
}

// const obj2 = {...obj}
const obj2 = Object.assign({},obj)
console.log(obj) 
console.log(obj2) 


