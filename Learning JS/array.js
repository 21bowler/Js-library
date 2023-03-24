// !8 important array methods in Jaavascript

const items = [
    { name: 'Bike',      price: 100 },
    { name: 'TV',        price: 200 },
    { name: 'Album',     price: 10  },
    { name: 'Book',      price: 5   },
    { name: 'Phone',     price: 500 },
    { name: 'Computer',  price: 1000},
    { name: 'Keyboard',  price: 25  },
    { name: 'Mouse',     price: 75  },
]

// filter method

const filterItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(filterItems) //returns all prices below 100 or equal to it

//map method

const itemNames = items.map((item) => {
    return item.name
})
console.log(itemNames) //you will get an array in the console with fullnames in the object above

//find method

const findItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(findItem); //finds if there is a book in the array

// for each
items.forEach((item) => {
    console.log(item.name); //prints out each name in the console
})

//some methods

const someMethod = items.some((item) =>{
    return item.price <= 100;
})
console.log(someMethod); //says true because it has items les than or equal to 100bob

// every method (works close similarly to some method )

const everyMethod = items.every((item) =>{
    return item.price <= 1000;
})
console.log(everyMethod);// returns true beacause all items are less than 1000bob


// reduce method

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0) //this 0 is the starting point and second parameter.

console.log(total); //gives you 1915 because it adds everything in the price

// includes element

const numbers = [1, 2, 3, 4, 5];

const includesTwo = numbers.includes(2);

console.log(includesTwo); // returns true in the console beause there is 2 i the array above

