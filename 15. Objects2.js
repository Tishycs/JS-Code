/*                    DIFFERENCE BETWEEN BRACKET AND DOT NOTATION                            */
const key = 'email'                          
const Preety={
    name:'preeti',
    age:'22' ,
    'Preeti Hobbies':['Sleeping','Reading','Badminton','Guitar']
}
// -------------------------------------------------------------------
// console.log(Preety.Preeti Hobbies) so dot notation will not work we know the reason
// -------------------------------------------------------------------
 console.log(Preety['Preeti Hobbies']) 
/*so if you want to use space property then we can use bracket*/
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
Preety.key="tishycs@gmail.com" 
// but if we want to print it under 'email property'
Preety[key]="tishycs@gmail.com"
console.log(Preety)

