// object is a reference type data
// arrays are good but not sufficient for real world data
// objects stores key value pairs
// objects don't have index
// -----------------------------------------------------------------------
// SO How to create objects ?
//  const person = { name:"Tisha" , age:18 };

 const person = { name:"Tisha" , age:18 ,
   Interests:['Sleeping','Reading','Badminton','Guitar']
}
 console.log(person)
//  --------------------------------------------
 console.log(typeof person)
//  --------------------------------------------
 //  To print property inside object
 console.log(person.name)
 console.log(person.age)
 console.log(person.Interests)
//  -------------------------------
 console.log(person['name'])
 console.log(person['age'])
 console.log(person['Interests'])
//  --------------------------------------------
//  --------------------------------------------
// How to add more keywords or properties or key pair in object
person.gender='Female'
person['gender']='Female'
 console.log(person)
//  ------------------------------------------------------------------------------------------























