// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const arr = [3, 6, 8, 2]

const fiveAndGreaterOnly = arr.filter(function(num){
      if (num >= 5){
            return num
      }
})
// const fiveAndGreaterOnly = arr.filter(num => num >= 5)
console.log(fiveAndGreaterOnly)

// 2) Given an array of numbers, return a new array that only includes the even numbers.

const evenOnly = arr.filter(function(num){
      if(num % 2 === 0) {
            return num
      }
})
// const evenOnly = arr.filter(num => num % 2 === 0)
console.log(evenOnly)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const animal = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveCharactersOrFewerOnly = animal.filter(function(word){
      return word.length >= 2 && word.length <=5;

}).sort(function(a,b){
      return a.length - b.length
})

// const fiveCharactersOrFewerOnly = animal.filter(word => word.length >= 2 && word.length <= 5).sort((a,b) => a.length - b.length)

console.log(fiveCharactersOrFewerOnly)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const membership = [
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]

  const peopleWhoBelongToTheIlluminati = membership.filter(function(membership){
      if( membership.member === true){
          return membership
      }
  })
// const peopleWhoBelongToTheIlluminati = membership.filter(membership => membership.member === true)

  console.log(peopleWhoBelongToTheIlluminati)

//   5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const growUp = [
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]

const ofAge = growUp.filter(function(growUp){
      if(growUp.age >= 18){
            return growUp
      }

})

// const ofAge = growUp.filter(growUp => growUp.age >= 18)
console.log(ofAge)

