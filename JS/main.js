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



