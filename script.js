let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let timeZoneSelector = document.getElementById("select");

// Function to update the clock based on the selected time zone
function updateClock() {
    let currentTime = new Date();
    let selectedTimeZone = timeZoneSelector.value;

    let options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: selectedTimeZone
    };

    let formatter = new Intl.DateTimeFormat('en-US', options);
    let timeString = formatter.format(currentTime);

    let [hours, minutes, seconds] = timeString.split(':');

    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}

// Initial update
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// Event listener for the time zone selector
timeZoneSelector.addEventListener("change", updateClock);


// this is the EI varsion on my request