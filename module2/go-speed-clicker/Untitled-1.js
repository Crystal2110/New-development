


// Get the elements
const clickCountElement = document.getElementById("click");
const countUpButton = document.getElementById("countUp");
const timerButton = document.getElementById("timer");
const timeDisplayElement = document.getElementById("time-display");

// Initialize click count from localStorage or set to 0
let clickCount = localStorage.getItem("clickCount") || 0;
clickCountElement.textContent = clickCount;

// Function to increment and update click count
function incrementClickCount() {
    clickCount++;
    clickCountElement.textContent = clickCount;
    // Store the updated click count in localStorage
    localStorage.setItem("clickCount", clickCount);
}

// Event listener for the Count Up button
countUpButton.addEventListener("click", incrementClickCount);

// Extra credit: Countdown timer
let timeLeft = 15; // Set the initial time (in seconds)
let timerInterval;

function startTimer() {
    timerButton.disabled = true;
    timerInterval = setInterval(() => {
        timeDisplayElement.textContent = `${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerButton.disabled = false;
            timeDisplayElement.textContent = "Time is up!";
            // Disable click count after timer ends
            countUpButton.disabled = true;
        }
        timeLeft--;
    }, 1000);
}

// Event listener for the Start Timer button
timerButton.addEventListener("click", startTimer);



