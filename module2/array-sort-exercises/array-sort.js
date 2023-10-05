// 1) Sort an array from smallest number to largest
const arr = [1, 3, 5, 2, 90, 20]

const leastToGreatest = arr.sort(function(a, b){
      return  a - b
})

console.log(leastToGreatest)

// 2) Sort an array from largest number to smallest

const greatestToLeast = arr.sort(function(a,b){
      return b - a 
})

console.log(greatestToLeast)

// 3) Sort an array from shortest string to longest

const order = ["dog", "wolf", "by", "family", "eaten"]

const lengthSort = order.sort(function(a, b){
      return a.length - b.length
})

console.log(lengthSort)

// 4) Sort an array alphabetically

const alphabetical = order.sort()

console.log(alphabetical)

// 5) Sort the objects in the array by age

const info = [
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]

const byAge = info.sort(function(a, b){
      return a.age - b.age
})

console.log(byAge)