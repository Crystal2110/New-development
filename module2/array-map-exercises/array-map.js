// 1. Make an array of numbers that are doubles of the first array
const arr = [2, 5, 100]

const doubleNumbers = arr.map(function(num){
      return num * 2
})

console.log(doubleNumbers)

// 2. Take an array of numbers and make them strings
const arr1 = [2, 5, 100];

const stringItUp = arr.map(function(arr1){
      return arr1.toString();
});

console.log(stringItUp)

// 3) Capitalize the first letter of each name and make the rest of the characters lowercase
 
const arr2 = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const capitalizNames = arr2.map(function(arr2){
      return arr2.charAt(0).toUpperCase()
})

console.log(capitalizNames)

// 4) Make an array of strings of the names

const arr3 = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]

  const namesOnly = arr3.map(function(arr3){
      return arr3.name
  })

  console.log(namesOnly)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
const makeStrings= arr3.map(function(arr3) {
      if(arr3.age >= 18){
            console.log(arr3.name + " can go to The Maxrix")
      }else if(arr3.age <=18){
            console.log(arr3.name + " is under age!!")
      }
})

// 6) Make an array of the names in h1s, and the ages in h2s


const readyToPutInTheDom = arr3.map(function(arr3){
      if(arr3.age >= 18){
            return "<h1>" + arr3.name.toString() + "</h1>" +  "<h2>" + arr3.age.toString() + "</h2>";
      }else if(arr3.age <= 18){
            return "<h1>" + arr3.name.toString() + "</h1>" + "</h2>" + arr3.age.toString() + "</h2>";
      }
})

console.log(readyToPutInTheDom)