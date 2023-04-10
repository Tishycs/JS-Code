// Classes ---> Template for Objects
"Use strict"; 
class CreateUser{
constructor(firstname, lastname, emailid, age, address){
    this.firstname = firstname; 
    this.lastname = lastname;
    this.emailid = emailid;
    this.age = age; 
    this.address = address;
}
aboutInfo () {
    console.log(` Username is ${this.firstname}  ${this.lastname} \n User email-Id is  ${this.emailid} \n User age is  ${this.age} \n User address is  ${this.address}`)
}
 Identityform2withreturn() {
    return ` Username is ${this.firstname}  ${this.lastname} \n User email-Id is  ${this.emailid} \n User age is  ${this.age} \n User address is  ${this.address}`
}

 is18() { if (this.age <= 18)
{ console.log("User can't access this form ") }  
else { console.log("User can access this form") } }
} 


// Inherited Class 

class UserBackINfo extends CreateUser {
 constructor(firstname, lastname, emailid,username){
  super(firstname,lastname,emailid);
   this.username = username; 
  }  


//  static property
 static me = "HI I'm static"

//  static function
 static mefunc() {
    console.log(`${this.me} value inside static me func`)
 }
  
//   getters and setters 
     setvalue(fullname){
    this.fullname= fullname
     } 
     getvalue(){
        console.log(this.fullname)
     }
 } 
 
// calling class  
const user1 = new CreateUser('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user1); 

const user2 = new CreateUser('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user2); 

const user3 = new CreateUser('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user3);   
  
const user4 = new UserBackINfo('Viana', 'Rasoniya', 'risona@uahdnf.com','Tikkaanna'); 
console.log(user4.checkusername);    

const user5 = new UserBackINfo('Viana', 'Rasoniya', 'risona@uahdnf.com','Tikkaanna'); 
console.log(user5.checkusername);         

// getter setter setting in obj 
const user6 = new UserBackINfo()
user6.setvalue("Tisha Gupta")  
user6.getvalue()             
 
// static in obj
const user7 = UserBackINfo.mefunc() 
 