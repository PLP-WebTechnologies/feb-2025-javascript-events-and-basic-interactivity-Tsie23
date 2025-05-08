document.getElementById("cta-button").addEventListener("click", function() {
    alert("Let's bring your brand to life!");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update the button icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '🌙'; // Crescent moon for dark mode
    } else {
        themeToggleButton.textContent = '🌞'; // Sun for light mode
    }
});

// Remove the JavaScript logic for the carousel/scrolling track
// The scrolling effect will now rely entirely on CSS animations