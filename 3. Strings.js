//                                                                                       S T R I N G S
  

//string indexing
  let firstname="nameofyourself";

// to find string length
 console.log(firstname.length);

//  find length without ''.length''
 console.log(firstname[0]);

//  find length backward
 console.log(firstname[firstname.length-5]);

//  space also include in string 
//  like this -  let firstname="nameofyourself    ";



//        Methods   of   string
// trim()
// touppercase()
// tolowercase()
// slice()
let noname="krishna ";

console.log(noname.length);
 noname=noname.trim();      //so in this case you can remove the spaces of variable
 console.log(noname); 
 console.log(noname.length); 

// // we use this both cases to change into upper or lowercase
console.log(noname.length);
noname=noname.toUpperCase();
console.log(noname);
// --------------
// --------------
noname=noname.toLowerCase();
console.log(noname);
// --------------
// --------------
 noname=noname.slice(0,5); //krish 
 console.log(noname);
    
  let newstring=noname.slice(1); 
  console.log(newstring);

// charAt(c): It returns the character at the “c” position within the string.
var mystring = "Javascript";
console.log(mystring.charAt(5))

// concat(p1, p2): Combines one or more strings and returns the concatenated string.
// Remember that the original string is not modified. 
var str1 = "Javascript"
var str2= str1.concat(" is amazing !")
console.log(str2)

//indexOf(char/substring)
var str1="Hi, my name is Sam!";
var str2 = str1.indexOf("name");  
console.log(str2)
//Output: -1 
