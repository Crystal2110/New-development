'Rest Operator'
//1.

function collectAnimals(...animals) {
      console.log(animals)
   }
   
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
  // ["dog", "cat", "mouse", "jackolope", "platypus"]

//2.

function combineFruit(fruit, sweet, vegetables) {
 return {
      fruit,
      sweet,
      vegetables
 };
}

const combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables});

const result = combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])

console.log(result)

// or

// function combineFruit(fruit, sweets, vegetables) {
//       return {
//         fruit: fruit,
//         sweets: sweets,
//         vegetables: vegetables
//       };
//     }
// const combineFruit = (fruit, sweets, vegetables) => ({ fruit: fruit, sweets: sweets, vegetables: vegetables })

// const result = combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]);

// console.log(result);
       
//3.
function parseSentence({location, duration}){
      return `We're going to have a good time in ${location} for ${duration}`
  }    
  const newTrip =({
    location: "Burly Idaho",
    duration: "2 weeks"
  })
  ;
  
  console.log(parseSentence(newTrip))

//4.

// function returnFirst(items){
//       const firstItem = items[0]; /*change this line to be es6*/
//       return firstItem
//   }

function returnFirst(items){
      const firstItem = items
      return firstItem
  }

//5.

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const[firstFav, secondFav, thirdFav, ...restFav] = favoriteActivities;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log (returnFavorites(favoriteActivities))

//6.
function combineAnimals() {
      return combineAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
      }
      
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
      
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

//7.
// Try to make the following function more ES6y:
     
// function product(a, b, c, d, e) {
//       var numbers = [a,b,c,d,e];
    
//       return numbers.reduce(function(acc, number) {
//         return acc * number;
//       }, 1)
//     }
    

const product = (...numbers) => numbers.reduce((acc,number) => acc * number, 1)

//8.
function unshift(array, a, b, c, d, e) {
      return [a, b, c, d, e].concat(array);
}
    
const unshift = (array, ...theRest) => [...theRest, ...array]


  
  






  