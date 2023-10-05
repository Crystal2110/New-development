const form = document.getElementById("travel-form");

function formAlert() {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const age = document.getElementById("age").value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const location = document.getElementById("location").value;
      var diet = [];

      for(let i = 0; i < form.food.length; i++){
            if(form.food[i].checked){
                  diet.push(form.food[i].value)
            }
      }


alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + diet);

}

form.addEventListener("submit", function(event){
      event.preventDefault()
      formAlert()
})

