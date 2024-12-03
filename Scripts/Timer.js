// Target date
const targetDate = new Date("January 29, 2025 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft >= 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the HTML
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        // Stop the countdown and show a message when the date is reached
        clearInterval(countdown);
        document.querySelector(".countdown").textContent = "The day has arrived!";
    }
}, 1000);

function shakeBoxes() {
    const boxes = document.querySelectorAll('.box'); // Select all boxes
    boxes.forEach(box => {
        box.classList.add('shake'); // Add the shake class
    });

    // Remove the shake class after the animation completes
    setTimeout(() => {
        boxes.forEach(box => {
            box.classList.remove('shake');
        });
    }, 400); // Match the duration of the animation (0.5s for desktop)
}

// Trigger the shake every 5 seconds
setInterval(shakeBoxes, 2000);

