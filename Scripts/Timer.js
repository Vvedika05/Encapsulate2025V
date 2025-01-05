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
        document.querySelectorAll(".time-value")[0].textContent = days;
        document.querySelectorAll(".time-value")[1].textContent = hours;
        document.querySelectorAll(".time-value")[2].textContent = minutes;
        document.querySelectorAll(".time-value")[3].textContent = seconds;
    } else {
        // Stop the countdown and show a message when the date is reached
        clearInterval(countdown);
        document.querySelector(".Timer").textContent = "The day has arrived!";
    }
}, 1000);
