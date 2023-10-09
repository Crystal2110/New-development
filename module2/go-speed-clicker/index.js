
//var display = document.getElementById("time-display");
document.getElementById("startTimer").addEventListener("click", function(){
 
       
    var timeleft = 15;
    var countDownTimer = setInterval(function function1(){
        document.getElementById("time-display").innerHTML = timeleft + "&nbsp"+"seconds ";
        if(timeleft <= 0) {
            clearInterval(countDownTimer);
            document.getElementById("time-display").innerHTML = timeleft + " Time is up!";
        }
        timeleft -= 1;
    
        console.log("time-display")
    },1000);
    
    
    },{once : true});
    
    var count = localStorage.on_load_count || 0;
    var button = document.getElementById("countUp");
    var click = document.getElementById("click");
    
    button.onclick = function () {
        
        localStorage.on_load_counter = click.innerHTML = ++ count;
    }
    
       
