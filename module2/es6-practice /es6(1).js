const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}

mapVegetables = arr => arr.map(carrot => ({type: "carrot", name: carrot }))


// Task 2 //
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
  

  filterForFriendly = arr => arr.filter(person => person. friendly)

  console.log(filterForFriendly(people))

// Task 3 //

// Re-write the following functions to be arrow functions: //

function doMathSum(a, b) {
      return a + b
  }
  
doMathSum = (a, b) => a + b;

var produceProduct = function(a, b) {
      return a * b
  }

var produceProduct = (a, b) => a * b;

// Task 4 //

// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following: Hi Kat Stark, how does it feel to be 40?//
function printString(firstName, lastName, age) {
      firstName = firstName || "Jane";
      lastName = lastName || "Doe";
      age = age || "100";
     return "Hi " + firstName + " " + lastName + ", " + "how does it feel to be " + age
  }
  
  console.log(printString("Kat", "Strak", "40"))


function printString(firstName = "Jane", lastName = "Doe", age = 100) {
      return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

console.log(printString("kat", "stark", "40"))

// Task 5 
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
      {
          type: "dog",
          name: "theodore"
      },
      {
          type: "cat",
          name: "whiskers"
      },
      {
          type: "pig",
          name: "piglette"
      },
      {
          type: "dog",
          name: "sparky"
      }
   ];
   
   function filterForDogs(arr) {
       return arr.filter(animal => {
           if (animal.type === "dog") {
               return true
           } else {
               return false
           }
       })
   }
   

const  filterForDogs = arr => arr.filter(animal => animal.type === "dog" )

console.log(filterForDogs(animals));

// # **Template Literals**

// Using template literals, write a function that takes `location` and `name` parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

function printString(name = "Janice", location = "Hawaii") {
      return `Hi ${name} !
      \n Welcome to ${location}.
      \n I hope you enjoy your stay. Please ask the 
      \n president of ${location} if you need anything.`
}


function printString(name = "Janice", location = "Hawaii") {
      return `Hi ${name} ! <br>
      Welcome to ${location}.<br>
      I hope you enjoy your stay. <br>
      Please ask the president of ${location} if you need anything.`
}

console.log(printString())




