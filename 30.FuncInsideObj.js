
//   functions inside objects with values
const user1 = {
    firstname: 'Tisha',
    lastname: 'Gupta',
}

function print() {
    console.log(`user name is ${this.firstname} ${this.lastname}`)
}
const user2 = {
    firstname: 'Divy',
    lastname: 'Gupta',
    printuserfunc: print, // if we want to acces print function inside object user2
    printme: function () {
        console.log(`user name is ${this.firstname} ${this.lastname} and she is the best human being`)
    }
}
user2.printuserfunc()



//   functions inside objects without key values
const methods = {
    calculator: function (x, y, z) {

        switch (z) {
            case '+':
                console.log(x + y)
                break;
            case '-':
                console.log(x - y)
                break;
            case '*':
                console.log(x * y)
                break;
            default:
                console.log("Add correct operator")
                break;
        }
    }
}



// Using Call, Apply, Bind with Parameter
methods.calculator.call(user1, 2, 6, '+')
methods.calculator.apply(user1, [2, 6, '-'])
const bindingfunc = methods.calculator.bind(user1, 2, 6, '*')
bindingfunc()

// Using Call, Apply, Bind without Parameter
user2.printme.call(user1)
const bindingfuncUser1 = user2.printme.bind(user1)
bindingfuncUser1()





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
    const user = {}
    user.firstname = firstname;
    user.lastname = lastname;
    user.emailid = emailid;
    user.age = age;
    user.address = address;
    user.Identityform = UserMethods.Identityform
    user.Identityform2withreturn = UserMethods.Identityform2withreturn
    user.is18 = function () { if (this.age <= 18) { console.log("User can't access this form ") } else { console.log("User can access this form") } }
    return user;
}

const user3 = creat_user_Func('Viana', 'Rasoniya', 'risona@uahdnf.com', 12, 'Tikkaanna,SoraAREAside');
console.log(user3);
user3.is18();

user3.Identityform()
console.log(user3.Identityform2withreturn())

// from line 60 to 90 the code is wrong so we going to use __proto__ for creating  a user with many functions
// this not how code should be like because it take too much values
//  because what if we want to use  many functions or what if we forget to add function in creating user
// check 31. proto.js file for that 