// How to iterate objects
// ------------------------------------
const aghoreInfo = {
Name : 'Aghore' ,
FavQuote : 'Just You' ,
FavSports : ['Badminton','Cricket']
} 
// ------------------------------------
         console.log(aghoreInfo)

// ------------------------------------------------------------------
//  With for in Loops
 // objects.keys() method
  for (const key in aghoreInfo) {
   console.log(`${key}: ${aghoreInfo[key]}`)   
     console.log( key,':',aghoreInfo[key]) //it show value of array like  ['Badminton','Cricket']
  }
// ------------------------------------------------------------------
// ------------------------------------------------------------------
  console.log(typeof(Object.keys(aghoreInfo)))  
  const val = Array.isArray ((Object.keys(aghoreInfo)))
  console.log(val)
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// With for of Loops
for (const key of Object.keys(aghoreInfo)) {
    console.log(key,':',aghoreInfo[key])
}