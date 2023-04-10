// Optional Chaining

const user = {
    myname : "Tisha Gupta",
 'address': {Houseno: '29', Streetno:'4', Colony : 'Subhash Colony'} 
}     
    
// console.log(user)   
 
 console.log(user.address)      // To solve this problem if address variable doesn't exist in program
console.log(user?.address?.Streetno)       // We use '?.'  


