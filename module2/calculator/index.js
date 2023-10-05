const form = document["calculate-form"]

// const num1 = document.getElementById("num1")
// const num2 = document.getElementById("num2")




function add(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
  
    sum = parseInt(num1) + parseInt(num2);
    // form.num1.value = ""
    // form.num2.value = ""
   
    document.getElementById("result1").innerHTML= "Sum of number is:" + sum
} 


function sub(){
    const num3 = document.getElementById("num3").value;
    const num4 = document.getElementById("num4").value;
  
    sum1 = parseInt(num3) - parseInt(num4);
    document.getElementById("result2").innerHTML= "Sum of number is:" + sum1
} 

function mul(){
    const num5 = document.getElementById("num5").value;
    const num6 = document.getElementById("num6").value;
  
    sum2 = parseInt(num5) * parseInt(num6);
    document.getElementById("result3").innerHTML= "Sum of number is:" + sum2
} 


  
form.addEventListener("onclick", function(event){
    event.preventDefault()
    add();
    sub();
    mul();
})