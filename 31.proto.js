"use strict" ; 
//  First of all prototype and [[prototype]] are two different things accorfing to official ecmascript documentation

// We're going to see __proto__ or [[prototype]] both are same things


const obj1 = {
    key1 : "value 1",
    key2 : "value 2"
}

const obj2 = Object.create(obj1) 
obj2.key3 = 'value 3' 

console.log(obj2) // output : obj2 key 3 : 'value 3'
console.log(obj2.__proto__)     // output : copy of obj1 ----> it's a proto of obj1 in simple way we inherit obj 1 value in 2 and obj2 is inherited object




// example 


// Now we going to use this proto in create user file file Node. 30 for creating user


// Creating function object for create_user_Func()
const UserMethods = {
    Identityform: function () {
        console.log(` Username is ${this.firstname}  ${this.lastname} \n User email-Id is  ${this.emailid} \n User age is  ${this.age} \n User address is  ${this.address}`)
    },
    Identityform2withreturn: function () {
        return ` Username is ${this.firstname}  ${this.lastname} \n User email-Id is  ${this.emailid} \n User age is  ${this.age} \n User address is  ${this.address}`
    }
}

// Instead of creating many users we can make one obj function for creating user
function creat_user_Func(firstname, lastname, emailid, age, address) {
    const user = Object.create(UserMethods)      // ---> using prototype create chain  here
    user.firstname = firstname;
    user.lastname = lastname;
    user.emailid = emailid;
    user.age = age; 
    user.address = address;
    user.is18 = function () { if (this.age <= 18) { console.log("User can't access this form ") } else { console.log("User can access this form") } }
    return user;
  //  We don't need to use this now bcs we use inheritance proto syntax Obj.create(any obj akka User Methods inside this function)
    // user.Identityform = UserMethods.Identityform  
    // user.Identityform2withreturn = UserMethods.Identityform2withreturn
    
} 

// calling objects and functions with objects 
const user3 = creat_user_Func('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user3);
user3.is18(); 
 
user3.Identityform()
console.log(user3.Identityform2withreturn())
