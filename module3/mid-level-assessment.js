//1 Challenge 1: Sort Array with Preserved Index for -1 Values


function solution(arr) {

const sortNum = arr.reduce((arr, num) => {
      if (num > -1){
      arr.push(num);
}
      return arr.sort(function(a, b){return a - b});
}, []);

var index = 0;
var finalElements= [];

for(var i = 0; i < arr.length; i++) {
      var element = arr[i]
      if(element > -1 ) {
            finalElements.push(sortNum[index]);
            index++;
      } else {
            finalElements.push(element)
      }
}

      return finalElements;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))


// function solution(arr) {
  
//       if(arr.includes(-1)){
//           const filtered = arr.filter(item => item !== -1)
//           filtered.sort((a, b) => a - b)
//           for(let i = 0; i < arr.length; i++){
//               if (arr[i] !== -1){
//                   arr[i] = filtered[0]
//                   filtered.splice(0, 1)
//               }
//           }
//       } else arr.sort((a, b) => a - b)
      
    
//       return arr
      
//     }


// 2  Challenge 2: Count Vowels

// const input = 'Hello, World!';
const input = 'Counting VOwels';

function countVowels(input) {
      let vowelsCount = 0;
      const vowels = ['a', 'e', 'i', 'o', 'u']
      for (let char of input) {
            if (vowels.includes(char.toLowerCase())){
            vowelsCount++
            }
      }
      return vowelsCount
}

console.log(countVowels(input)); // Output: 3

