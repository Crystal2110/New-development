var goombaInputElem = document.querySelector("#goomba");
var bobInputElem = document.querySelector("#bob");
var cheepInputElem = document.querySelector("#cheep");



document.addEventListener("change", function (){
      var goombaInputValue = parseInt(goombaInputElem.value);
      var bobInputValue = parseInt(bobInputElem.value);
      var cheepInputValue = parseInt(cheepInputElem.value);

      // var coin1 = document.getElementById("num1");

      if(isNaN(goombaInputValue) || isNaN(bobInputValue) || isNaN(cheepInputValue)) {
      document.querySelector("#mytotal").innerHTML = 0;
      } else {
      document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobInputValue * 7) + (cheepInputValue * 11);
      document.querySelector("#num1").innerHTML = (goombaInputValue * 5);
      document.querySelector("#num2").innerHTML = (bobInputValue * 7);
      document.querySelector("#num3").innerHTML = (cheepInputValue * 11);

      document.querySelector("#total").style.color = "black";
      }

});