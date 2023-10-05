//var display = document.getElementById("time-display");
// document.getElementById("startTimer").addEventListener("click", function(){
 
       
//       var timeleft = 15;
//       var countDownTimer = setInterval(function function1(){
//           document.getElementById("time-display").innerHTML = timeleft + "&nbsp"+"seconds ";
//           if(timeleft <= 0) {
//               clearInterval(countDownTimer);
//               document.getElementById("time-display").innerHTML = timeleft + " Time is up!";
//           }
//           timeleft -= 1;
      
//           console.log("time-display")
//       },1000);
      
      
//       },{once : true});
      
//       var count = localStorage.on_load_count || 0;
//       var button = document.getElementById("countUp");
//       var click = document.getElementById("click");
      
//       button.onclick = function () {
          
//           localStorage.on_load_counter = click.innerHTML = ++ count;
//       }
document.getElementById("startTimer").addEventListener("click", function(){
      var timeleft = 15;
      
      var countDownTimer = setInterval(function function1(){

if(timeleft <= 0 ) {
      clearInterval(countDownTimer);
      document.getElementById("time-display").innerHTML = timeleft + "&nbsp" + "Time Over";
      
}else {
document.getElementById("time-display").innerHTML = timeleft + "&nbsp" + "seconds remaining"; 

}
timeleft -= 1;
console.log("time-display")
},1000);

},{once : true});

var count = localStorage.getItem("time-display") || 0;
var button = document.getElementById("countUp");
var click = document.getElementById("click")
 

//  button.onclick = function () {
      
//      localStorage.on_load_counter = click.innerHTML = ++ count;

//  }

button.addEventListener('click', function() {
      // Increase the click count and save to local storage
      count++;
      localStorage.setItem('click', count);
      // Update the UI with the new click count
      document.getElementById('click').textContent = count;
    });
    
    // Refresh the website by setting the click count back to 0 when the page loads
    ducoment.addEventListener('load', function() {
      localStorage.setItem('time-display', 0);
      document.getElementById('time-display').textContent = 0;
    });