// Function to update the clock every second
function updateClock() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const periodElement = document.getElementById("period");

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "AM";

    // Change period to PM if it's after 12:00 PM
    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12; // Convert to 12-hour format
        }
    }

    // Midnight case (00 -> 12 AM)
    if (hours === 0) {
        hours = 12;
    }

    // Ensure two-digit format for hours, minutes, and seconds
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update the DOM elements with the new time
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    periodElement.textContent = period;
}

// Call the updateClock function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
