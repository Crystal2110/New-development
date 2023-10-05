const form = document.addItem

form.addEventListener('submit', (event) => {
    event.preventDefault()

const title = form.title.value
     form.title.value = ""

const ul = document.getElementById('list');
     ul.classList.add('list')

const li = document.createElement('li');
     li.classList.add('addList')
     ul.prepend(li);
     
const addDiv = document.createElement('div')
     addDiv.textContent = title + " "
     addDiv.style.margin = "8px"
     addDiv.textAlign = "center"
     addDiv.classList.add('addItem')
     li.appendChild(addDiv)

const editButton = document.createElement('button')
     editButton.textContent = "Edit"
     editButton.style.marginRight = "5px"
     editButton.classList.add('edit');
     li.appendChild(editButton)
 
const deleteButton = document.createElement('button')
     deleteButton.textContent = "X"
     deleteButton.classList.add('delete');
     li.appendChild(deleteButton) 

    //  const deleteButton = document.getElementsByClassName('delete');
 deleteButton.addEventListener('click', function remove (e){
     e.target = document.getElementsByTagName('li')

     ul.removeChild(li)
          });

editButton.addEventListener('click', () => {
     const newText = prompt('Edit the item:', addDiv.textContent);
     if (newText !== null) {
          addDiv.textContent = newText;
     }
});
           

// addButton.addEventListener('click', (e)=>{
//     let e = document.getElementById('addDiv');
//     e.setAttribute('id','addDiv')

//      addDiv.textContent = title + " "
//     const addButton = document.getElementsbyClassName('save')
//      addButton.textContent = "save"
//      addButton.style.marginRight = "5px"
//      addButton.classList.add('edit');
//      document.getElementsByTagName('li')[0].appendChild(addButton)

});

   // });    

//    const form = document.addItem;

//    form.addEventListener('submit', (event) => {
//        event.preventDefault();
   
//        const title = form.title.value;
//        form.title.value = '';
   
//        const ul = document.getElementById('list');
//        ul.classList.add('list');
   
//        const li = document.createElement('li');
//        li.classList.add('addList');
//        ul.prepend(li);
   
//        const addDiv = document.createElement('div');
//        addDiv.textContent = title + ' ';
//        addDiv.style.margin = '8px';
//        addDiv.style.textAlign = 'center';
//        addDiv.classList.add('addItem');
//        li.appendChild(addDiv);
   
//        const editButton = document.createElement('button');
//        editButton.textContent = 'Edit';
//        editButton.style.marginRight = '5px';
//        editButton.classList.add('edit');
//        li.appendChild(editButton);
   
//        const deleteButton = document.createElement('button');
//        deleteButton.textContent = 'X';
//        deleteButton.classList.add('delete');
//        li.appendChild(deleteButton);
   
//        deleteButton.addEventListener('click', () => {
//            ul.removeChild(li);
//        });
   
//        editButton.addEventListener('click', () => {
//            const newText = prompt('Edit the item:', addDiv.textContent.trim());
//            if (newText !== null) {
//                addDiv.textContent = newText;
//            }
//        });
//    });
   