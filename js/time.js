const updateClock = () => {
    const now = new Date();

    // Get hours, minutes, and seconds, padding with leading zeroes
    let hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Construct the time string without AM/PM
    const timeString = `${hours} <span>H :</span> ${minutes} <span>M :</span> ${seconds} <span>S</span>`;

    // Update the HTML content of the clock element
    document.getElementsByClassName('clock')[0].innerHTML = timeString;
}

// Call updateClock immediately to set the initial time
updateClock();
// Set an interval to update the clock every second
setInterval(updateClock, 1000);
