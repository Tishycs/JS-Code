// Objects inside Array
// It's very useful in real World Applications

const users=[
{UserId:1,UserName:'TiS',Experience:'Pro'},
{UserId:2,UserName:'Grishu',Experience:'Pro'},
{UserId:3,UserName:'pranpaani',Experience:'Pro'},
{UserId:4,UserName:'TRIPOD',Experience:'Professional'}
]

// for (const User of users) {
//     console.log(User)
//     console.log(User.UserName)
// }
// -----------------------------------------------------------
// Nested Destructuring
// const[user1,user2,user3,user4]= users;
const[{UserName:user1},,{Experience},{UserName:user4}]= users;
console.log(user1)
console.log(user1,Experience,user4);






