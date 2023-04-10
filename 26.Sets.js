// Sets ---> It is iterable which only stores unique value 
// It's also have it's own methods like array
// It doesn't have index based class
// Order is not guaranteed

const numbers = new Set([1, 2, 3, 3])
console.log(numbers);
console.log(numbers[2]); // output undefined bcs we can't access particular index

const items = new Set(['item1', 'item2', 'item3', 'item4', 'item5'])

items.add(2)
items.add("items")
items.add("5")
items.add(6)
console.log(items)

console.log(items.has(2))   // used to find element in Sets
console.log(items.has('it'))
if (items.has('wizard')) {
    console.log("Yes, Wizard is present in Set of items")
}
else {
    console.log("No, Wizard is not present in Set of items")
}
if (items.has('items')) {
    console.log("Yes, items is present in Set of items")
}
else {
    console.log("No, items is not present in Set of items")
}

// Using for of loops for the first time in my js code entire life
console.log("\nPrinting set of items inside for of loop :  \n")
for (const item of items) {
    console.log(item)
}

// we can add Sets as to filter out duplicate elements inside array
const array = [1, 2, 3, 3, 4, 5, 5, 6, 1, 7, 7, 8, 8, 9, 0, 0, 10]

const filter_array_using_set = new Set(array)
console.log(filter_array_using_set)
console.log(array) 

// Finding Sets length
let length= 0;
for (const sets of filter_array_using_set) {
    length++
}
console.log(length) 
