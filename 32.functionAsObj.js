// javascript function ---> function + object 
// Only function provide prototype property

function hello() {  
    console.log("Hello World")
}

hello.prototype.abc = 'abc'
console.log(hello.prototype.abc) 

hello.prototype.sum = function(a,b){ 
    return a+b 
} 
console.log(hello.prototype.sum(2,3))  

console.log(hello.prototype)   


// Create user function example instead of making another object for functions we use prototype for adding other function in create user function


function creat_user_Func(firstname, lastname, emailid, age, address) {
    const user = Object.create(creat_user_Func.prototype)    // ----> making functions using prototype
    user.firstname = firstname;
    user.lastname = lastname;
    user.emailid = emailid;
    user.age = age; 
    user.address = address;
    user.is18 = function () { if (this.age <= 18) { console.log("User can't access this form ") } else { console.log("User can access this form") } }
    return user;
} 

creat_user_Func.prototype.Identityform = function () {
            console.log(` Username is ${this.firstname}  ${this.lastname} \n User email-Id is  ${this.emailid} \n User age is  ${this.age} \n User address is  ${this.address}`)
        }

creat_user_Func.prototype.Identityform2withreturn = function () {
            return ` Username is ${this.firstname}  ${this.lastname} \n User email-Id is  ${this.emailid} \n User age is  ${this.age} \n User address is  ${this.address}`
        }



// calling objects and functions with objects 
const user3 = creat_user_Func('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user3);
user3.is18(); 
 
user3.Identityform()
console.log(user3.Identityform2withreturn())



