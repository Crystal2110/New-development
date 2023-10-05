var peopleArray = [
      {
          firstName: "Sarah",
          lastName: "Palin",
          age: 47
      },
      {
          firstName: "Frank",
          lastName: "Zappa",
          age: 12
      },
      {
          firstName: "Rick",
          lastName: "Sanchez",
          age: 78
      },
      {
          firstName: "Morty",
          lastName: "Smith",
          age: 29
      },
      {
          firstName: "Kyle",
          lastName: "Mooney",
          age: 27
      },
      {
          firstName: "Pasha",
          lastName: "Datsyuk",
          age: 13
      },
      {
          firstName: "Lev",
          lastName: "Tolstoy",
          age: 82
      }
  ]

  function sortedOfAge(peopleArray){
      const filteredAge = peopleArray.filter(function(peopleArray){
            return peopleArray.age > 18
        
      });
      const sortedLName = filteredAge.sort(function(a, b){
            return a.lastName.localeCompare(b.lastName)
      });
      const result = sortedLName.map(function(peopleArray){
            return "<li>" + peopleArray.firstName.toString() + " " + peopleArray.lastName + " is " + peopleArray.age + "<li>"
      })
      return result
  }

  console.log(sortedOfAge(peopleArray));

//   Extra Credit

// Create another array of one or more individuals and add it to the original array.

const addPerson = peopleArray.reduce(function(final,peopleArray){
      final.push(peopleArray)
      return final
},[{firstName:"Crystal",
    lastName: "Musser",
    age:39}])

console.log(addPerson)

// Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.

function filterByLastName(peopleArray){
      const filteredPeople = peopleArray.filter(function(peopleArray){
      const lastChar = peopleArray.lastName.toLowerCase()
      return lastChar.endsWith("y") || lastChar.endsWith("a");
      })
      return filteredPeople;
};


const filteredPeopleArray = filterByLastName(peopleArray);
console.log(filteredPeopleArray);

// Remove the second individual from the array.

peopleArray.splice(1, 1); // Removes the second individual

console.log(peopleArray);

// Return the array in reverse order.
const reverseOrder =  peopleArray.reverse();
console.log(reverseOrder)