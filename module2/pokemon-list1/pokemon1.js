// https://api.vschool.io/pokemon 

//Step One: get the data

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.vschool.io/pokemon", true);
// xhr.send();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         //server is responded and ready to handle the data;
//         const JSONdata = xhr.responseText;
//         const data = JSON.parse(JSONdata);
//         showData(data)
//         }
//     }

//     function showData(data) {
//         const h1 = document.createElement('h1')
//         h1.textContent = JSON.stringify(data)
//         document.body.appendChild(h1)
//     }







// Step Two: display the data

// const xhr = new XMLHttpRequest()

// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send();

// xhr.onreadystatechange = function(){
//       if(xhr.readyState === 4 && xhr.status === 200){
//             const JSONdata = xhr.responseText
//             const data = JSON.parse(JSONdata)
//             showData(data.objects[0].pokemon)
//       }
// }

// function showData(arr){
//       for(let i = 0; i < arr.length; i++){
//           const h1 = document.createElement('h1')
//           h1.textContent = JSON.stringify(arr[i])
//           document.body.appendChild(h1)
//       }
//   }



//Extra Credit: Display details about each Pokémon



const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
      const JSONdata = xhr.responseText;
      const data = JSON.parse(JSONdata);
      showData(data.objects[0].pokemon)
  }
}

function showData(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h1 = document.createElement("h1");
        const pokemonName = document.createElement("p");
        pokemonName.textContent = `Name: ${arr[i].name}`;
        h1.appendChild(pokemonName)

        const resourceElement = document.createElement('p')
        resourceElement.textContent = `Resouce URI: ${arr[i].resource_uri}`;
        h1.appendChild(resourceElement);
        document.body.appendChild(h1)    
    }
}








//Create "div" and show the same result

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.vschool.io/pokemon", true);
// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//       const JSONdata = xhr.responseText;
//       const data = JSON.parse(JSONdata);
//       showData(data.objects[0].pokemon)
//   }
// }

// function showData(arr) {
//     const result = document.createElement("div");
   
//     for (let i = 0; i < arr.length; i++) {
//         // const pokemon = arr[i]
//         const pokemonName = document.createElement("p");
//         pokemonName.textContent = `Name: ${arr[i].name}`;
//         result.appendChild(pokemonName)

//         const resourceElement = document.createElement('p')
//         resourceElement.textContent = `Resouce URI: ${arr[i].resource_uri}`;
//         result.appendChild(resourceElement);
//         document.body.appendChild(result)    
//     }
// }







//       // Check if data.objects[0].pokemon is an array
//       if (Array.isArray(data.objects[0].pokemon)) {
//         showPokemonNames(data.objects[0].pokemon);
//       } else {
//         console.error("Invalid data structure in the API response.");
//       }
//     } else {
//       console.error("Error loading data. Status code:", xhr.status);
//     }
//   }
// };

// function showPokemonNames(pokemonArray) {
//   const container = document.createElement("div");

//   for (let i = 0; i < pokemonArray.length; i++) {
//     const pokemonName = document.createElement("p");
//     pokemonName.textContent = pokemonArray[i].name;
//     container.appendChild(pokemonName);
//   }

//   document.body.appendChild(container);
// }


// const xhr = new XMLHttpRequest();

// xhr. open("GET", "http://api.vschool.io/pokemon",true)

// xhr.send();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         showData(data.objects[0].pokemon)
//     }
// }

// function showData(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         const div = document.createElement("div")
//         const nameElement = document.createElement('p')
//         nameElement.textContent = `Name: `
//     }
// }
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.vschool.io/pokemon", true);
// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const JSONdata = xhr.responseText;
//     const data = JSON.parse(JSONdata);
//     showDetails(data.objects[0].pokemon);
//   }
// };

// function showDetails(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const div = document.createElement('div'); // Create a div element
//     const pokemon = arr[i];

//     // Create and append elements for name and resource_uri
//     const nameElement = document.createElement('p');
//     nameElement.textContent = `Name: ${pokemon.name}`;
//     div.appendChild(nameElement);

//     const resourceUriElement = document.createElement('p');
//     resourceUriElement.textContent = `Resource URI: ${pokemon.resource_uri}`;
//     div.appendChild(resourceUriElement);

//     document.body.appendChild(div); // Add the div to the HTML body
//   }
// }



// function showData(arr){
//       arr.forEach((pokemon) => {
//             const h1 = document.createElement('h1');
//             h1.textContent = pokemon.name;
//             document.body.appendChild(h1);
//       });
     
// }
// function showData(pokemonData) {
//       if (Array.isArray(pokemonData)) {
//         pokemonData.forEach((pokemon) => {
//           const h1 = document.createElement("h1");
//           h1.textContent = pokemon.name;
//           document.body.appendChild(h1);
//         });
//       }
//     }
    
    
    
    
    
    

// function showData(arr){
//       for(let i = o; i < arr.length; i++){
//             const h1 = document.createElement('h1')
//             h1.textContent = arr[i].name
//             document.body.appendChild(h1)
//       }
// }

