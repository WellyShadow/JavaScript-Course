
// let fruits = ['apple', 'banana', 'orange'];

// console.log(fruits)

// fruits[1] = 'grapes'

// console.log(fruits)

// console.log(fruits.length)

// fruits.push('mango')

// console.log(fruits)

// fruits.pop('mango')

// console.log(fruits)

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// } 


let person = {
    name: 'John',
    age: 25,
    isStudent: true,
}

console.log(person.name)
console.log(person['age'])

person.age = 30;

console.log(person.age)

person.city = 'New York'

console.log(person)

for (let key in person){
    console.log(key+": "+person[key])
}