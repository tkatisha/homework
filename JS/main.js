const aboutMe = {
    name: 'Kate',
    age: 24,
    status: 'Married',
    country: 'Russia',
    city: 'Krasnodar',
    sayHello(name) {
            console.log(`Hello ${name}`)
        }
} 

aboutMe.sayHello('Tom')

// ================================================

const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Mary',
        age: 31,
        isAdmin: false
    },
    {
        name: 'Ann',
        age: 25,
        isAdmin: true
    },
    {
        name: 'Kostya',
        age: 28,
        isAdmin: true
    },
    {
        name: 'Kate',
        age: 24,
        isAdmin: true
    },
]

let simpleUser = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        simpleUser++
    } 
}

console.log(simpleUser)

// ================================================

function greetings(name) {
    return `Hello ${name}`
}

console.log(greetings('Alex'))

// ================================================

const numbers = [1, 11, 3, 1, 5, 3, 7, 13, 9, 10]

function checkten(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        } 
    } 
    return 
}

checkten(numbers)

// ================================================

function calculator(firstNumber, lastNumber, operator) {
    if(typeof firstNumber === 'number' && typeof lastNumber === 'number' && operator === "minus") {
        return result = firstNumber - lastNumber
    } else if(typeof firstNumber === 'number' && typeof lastNumber === 'number' && operator === "plus") {
        return result = firstNumber + lastNumber
    } else if(typeof firstNumber === 'number' && typeof lastNumber === 'number' && operator === "multiply") {
        return result = firstNumber * lastNumber
    } else if(typeof firstNumber === 'number' && typeof lastNumber === 'number' && operator === "divide") {
        return result = firstNumber / lastNumber
    }
}

calculator(10, 5, 'divide')

console.log(result)








