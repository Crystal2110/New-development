// const xhr = new XMLHttpRequest()
//         // method  // url                     // async?
// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
       
//     } 
// }


// function showData(arr){
//     for (let i = 0; i < arr.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = arr[i].name
//         document.body.appendChild(h1)
//     }
// }

// function Name() {
//       var xhr = new XMLHttpRequest();
//       xhr.open("GET", "https://api.vschool.io/pokemon");

//       xhr.onreadystatechange = function(){
//             if(this.readyState === 4 && this.status === 200){
//                   const h1 = document.createElement('h1')
//             }
//       }
//       xhr.send();
// }

// const xhr = new XMLHttpRequest()
//         // method  // url                     // async?
// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         showData(data.results)
//     } 
// }


// function showData(arr){
//     for(let i = 0; i < arr.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = arr[i].name
//         document.body.appendChild(h1)
//     }
// }
const xhr = new XMLHttpRequest()

        // method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data.objects[0].pokemon)
//     } 
// }

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
    } 
}


function showData(arr){
    // const h1 = document.createElement('h1')
    
    // document.body.appendChild(h1)
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        var result = `name: ${arr[i].name}` + `\r\n` + `\nresource_uri: ${arr[i].resource_uri}`
         h1.textContent = result
        // h1.textContent = arr[i].resource_uri
        document.body.appendChild(h1)

    }
}