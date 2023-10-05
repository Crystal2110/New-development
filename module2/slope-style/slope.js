'Rest Operator'
//1.
function collectAnimals(...animals) {
    console.log (animals)
 }
 
 collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
  
  collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
  // ["dog", "cat", "mouse", "jackolope", "platypus"]

//2.
  function combineFruit(fruit, sweets, vegetables){
    console.log(`fruit:`, fruit);
    console.log(`sweets:`, sweets);
    console.log(`vegetables:`, vegetables);
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])

//3.
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  
}
console.log(parseSentence(vacation))           

//4.
const arr = ["important", "skip", "important"]

const[firstItem, secondItem, ...restItems] = ["important", "content", "skip", "important"]

console.log(secondItem)

// const arr = ["important", "skip", "important"]

// const[,secondItem] = arr

// console.log(secondItem)

//5.
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const[firstFav, secondFav, thirdFav] = favoriteActivities;
    return `My top three favorite activities are, ` + firstFav + `, ` + secondFav + `, and ` + thirdFav;
}

console.log(returnFavorites(favoriteActivities))

//6.
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// const combineAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
// console.log(combineAnimals)


function combineAnimals() {
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
    }
    const realAnimals = ["dog", "cat", "mouse"];
    const magicalAnimals = ["jackolope"];
    const mysteriousAnimals = ["platypus"];
    
    console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//7.
function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }


// function product(...numbers) {
//     return numbers.reduce((acc, number) => {
//         return acc * number
//     },1)
// }
// console.log(product(1,2,3,4,5))   

function product(...numbers) {
    console.log (numbers.reduce((acc, number) => {
        return acc * number
    },1))
}
product(1,2,3,4,5)

//8.

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }
  
// console.log(unshift([1,2,3],1,2,3,4,5))

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }

  const unshift = (array,...rest)=> {
    return rest.concat(array); 
}
console.log(unshift([1,2,3],1,2,3,4,5))

//9.


function populatePeople(names){
    return names.map(function(name){
        const [firstName, lastName] = name.split(" ");
        return {
            firstName: firstName,
            lastName: lastName,
        }
    })
}

console.log(populatePeople( ["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

// console.log(populatePeople( ["Frank Peterson", "Suzy Degual", "Liza Jones"]))

// const populatePeople=(names => {
//     return names.map(name => {
//     const [firstName, lastName] = name.split(' ');
//     return {
//         firstName: firstName,
//         lastName: lastName,
//     }
// })
// })

// console.log(populatePeople( ["Frank Peterson", "Suzy Degual", "Liza Jones"]))