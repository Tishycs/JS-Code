// BRAIN DUMP CODE

const person = { "name":"Tisha" , age:18  ,

 "Interests":['Sleeping','Reading','Badminton','Guitar'] , 

 "Gender":prompt("what is your Gender?")  
}

switch (person['Gender']) 
{ 
    case 'Male':
         alert("Your form is loading")
     break;

    case 'Female':
         alert("Your form is loading")
        break;

    case 'Trans':
         alert("Your form is loading")
        break;

    default:
         alert("Please fill the above Information")
        break;
            
}
 console.log(person.Gender)