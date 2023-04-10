// Maps ---> It's a object literal



// key -> string 
// Key -> symbol
const person={
    firstname: "Tisha Gupta",
    age:           1000 ,
    1:             12 // can use symbol as key
}

console.log(person.age)
console.log(person["firstname"])  
console.log(person["age"])  
console.log(person[1])  
console.log(typeof(person[1])) 

for (const key in person) { 
    console.log(typeof(key))
} 

// key value pair 
const person2 = new Map()
person2.set('firstname','Tisha Gupta')
person2.set('age','1000')
person2.set(1,'one')  
person2.set([1,2,3],'one')  
person2.set({1:'one',},'two')  
console.log(person2)   
console.log(person2.get(1)) // to get key value from map


for (const key of person2.keys()) { //keys type and keys name
    console.log(key,typeof key)
}  

for (const key of person2) {   // keys with it's element 
    console.log(key)
}  

for (const [key,value]of person2) {   
    console.log(key,value)
}  

const person3 ={
    id : 1,
    name : "Tisha"
}
const extrainfo = new Map()
extrainfo.set(person3,{age:4,gender:"female"})

console.log(person3.id)
console.log(person3.name)
// console.log(person3.age)  // undefined
console.log(extrainfo.get(person3).age)  
console.log(extrainfo.get(person3).gender)  


