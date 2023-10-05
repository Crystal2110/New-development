

function getData(){
      axios.get("https://api.vschool.io/crystal_m/todo/")
           .then(res => listData(res.data))
           .catch(err => console.log(err))
}

      
      
function listData(data){
      clearList()



      data.forEach((todo) => {
            const todoElement = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
      
            checkbox.addEventListener("change", () => {
            updateCompletionStatus(todo._id, checkbox.checked);
                  
            });
      
            const titleElement = document.createElement('span');
            titleElement.textContent = todo.title;
      
            todoElement.appendChild(checkbox);
            todoElement.appendChild(titleElement);



            document.getElementById('todo-list').appendChild(todoElement);
     


 

//   for (let i = 0; i < data.length; i++) {
//     const h3 = document.createElement('h3');
//     h3.textContent = data[i].title;
//     document.getElementById('todo-list').appendChild(h3);

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'X';
//     deleteButton.classList.add('delete');
// //     todoElement.appendChild(deleteButton);

//     deleteButton.addEventListener('click', function () {
//       const itemId = data[i]._id; 
//       axios
//         .delete(`https://api.vschool.io/crystal_m/todo/${itemId}`)
//         .then((res) => {
//           console.log(res.data);
//           getData(); 
//         })
//         .catch((error) => console.log(error));
const deleteButton = document.createElement("button")
deleteButton.textContent = "X"
deleteButton.classList.add("delete")
// h3.appendChild(deleteButton)

deleteButton.addEventListener('click', function (){
deleteItem(todo._id);
});
todoElement.appendChild(deleteButton);
document.getElementById("todo-list").appendChild(todoElement);
})
    
  }

function updateCompletionStatus(itemId, completed) {
      const updatedData = {completed: completed};

      axios.put(`https://api.vschool.io/crystal_m/todo/${itemId}`, updatedData)
      .then(res=> {
            console.log(res.data);
            getData();
      })
      .catch(error => console.log(error))
}

          

      function deleteItem(itemId){

      
            // const itemId = data[i]._id;
            axios
            .delete(`https://api.vschool.io/crystal_m/todo/${itemId}`)
            .then(res => {console.log(res.data)
                          getData()})
            .catch(error => console.log(error))
      }   
      
      
      
      function clearList(){
            const el = document.getElementById("todo-list")
            while(el.firstChild){
                  el.removeChild(el.firstChild)
            }
      }
      
      getData()
      
      const todoForm = document["todo-form"]
      
      todoForm.addEventListener("submit", function(data){
            data.preventDefault();
      
            const newTodo = {
                  title: todoForm.title.value,
                  price: parseInt(todoForm.price.value),
                  description: todoForm.description.value,
                  imgUrl: todoForm.imgUrl.value
      
            };
      
            todoForm.title.value = '';
            todoForm.price.value = '';
            todoForm.description.value = '';
            todoForm.imgUrl.value = '';
      
            todoForm.title.value = "";
      
            axios.post("https://api.vschool.io/crystal_m/todo/", newTodo)
                 .then(res => getData())
                 .catch(err => console.log(err))
      });
 