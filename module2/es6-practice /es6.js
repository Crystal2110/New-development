// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//          name = "fluffy";
//          } else {
//         name = "spot";
//          }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat","dog"]);

// ES6 Arrow Functions

// Task 1
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}

mapVegetables = arr => { return arr.map(carrot => ({type: "carrot" , name: carrot})) }

mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }) )


//Task 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}

filterForFriendly = arr => {return arr.filter(person => ({person: friendly})) }

// Task 3

function doMathSum(a, b) {
    return a + b
}

doMathSum =(a,b) => a + b

var produceProduct = function(a, b) {
    return a * b
}

var produceProduct = ( a,b ) => a * b;

// Task 4

// Hi Kat Stark, how does it feel to be 40?

const feel = {
    firstName: "Kat",
    lastName: "Stark",
    age: 40
};

function parseSentence({firstName, lastName, age}){
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

console.log(parseSentence(feel))

// Task 5

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

// Template Literals

const info = {
    location: "Hawaii",
    name: "Janice",
};

function parseSentence({location, name}){
    return `Hi ${name}!
    Welcome to ${location}.
    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}

console.log(parseSentence(info))