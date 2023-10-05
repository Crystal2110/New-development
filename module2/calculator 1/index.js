const form = document["calculator-form"];

function add() {
      const num1 = document.getElementById("num1").value;
      const num2 = document.getElementById("num2").value;

      sum = parseInt(num1) + parseInt(num2);

      document.getElementById("result").innerHTML = "Sum: " + sum;
}

form.addEventListener("onclick", function(event){
      event.preventDefault();
      add();
});