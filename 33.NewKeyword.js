// new keyword 

        // constructor function
function creat_user_Func(firstname, lastname, emailid, age, address) {
   
    this.firstname = firstname; 
    this.lastname = lastname;
    this.emailid = emailid;
    this.age = age; 
    this.address = address;
    return this; // not Important to use 
} 

creat_user_Func.prototype.Identityform = function () {
            console.log(` Username is ${this.firstname}  ${this.lastname} \n User email-Id is  ${this.emailid} \n User age is  ${this.age} \n User address is  ${this.address}`)
        }

creat_user_Func.prototype.Identityform2withreturn = function () {
            return ` Username is ${this.firstname}  ${this.lastname} \n User email-Id is  ${this.emailid} \n User age is  ${this.age} \n User address is  ${this.address}`
        }

creat_user_Func.prototype.is18 = function () { if (this.age <= 18)
    { console.log("User can't access this form ") }  
    else { console.log("User can access this form") } }


//  using new keyword for calling create user func 
const user1 = new creat_user_Func('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user1); 
const user2 = new creat_user_Func('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user2); 
const user3 = new creat_user_Func('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user3);  



 