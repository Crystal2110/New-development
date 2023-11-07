/* 
.map() method:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here

const finalNumbers = nums.map(function(nums){
    return nums * nums
})

console.log(finalNumbers)


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalizLetter =names.map(function(names){
    return names.charAt(0).toUpperCase()+names.slice(1)
})

console.log(capitalizLetter)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
// Your code here
// const readyForP = pokemon.map(function(pokemon){
//     return "<p>" + pokemon.toString() + "</p>";
// })

// console.log(readyForP)

const elements = pokemon.map(mon => `<p>${mon}</p>`)
console.log(elements)


