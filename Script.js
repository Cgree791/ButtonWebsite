// Define an array of different message variations
var messageVariations = [
    "You are adopted!",
    "You are still adopted!",
    "Adopted still!",
    "Still adopted!",
    "You are adopted!",
    "You are still adopted!",
    "Adopted still!",
    "Still adopted!",
    "You're adopted, and that's final!",
    "Adopted, now and forever!",
    "Still adopted, always will be!",
    "Guess what? Adopted!",
    "Congratulations, you're adopted!",
    "Adopted, just like that!",
    "Welcome to the adopted club!",
    "Adopted, for eternity!",
    "You're officially adopted!",
    "Yep, you're adopted!",
    "Adopted, and loving it!",
    "Surprise! Adopted!",
    "Embrace it, you're adopted!",
    "Say hello to being adopted!",
    "Adopted, no take-backs!",
    "Can you believe it? Adopted!",
    "Adopted, forevermore!",
    "You're in, you're adopted!",
    "It's official: adopted!",
    "Adopted, end of story!",
    // Add more variations as needed
];

// Variable to track if the button has been clicked before
var buttonClicked = false;

document.getElementById("myButton").addEventListener("click", function() {
    var button = document.getElementById("myButton");
    var clickSound = document.getElementById("clickSound");
    
    // Ensure the audio is at the beginning before playing
    clickSound.currentTime = 0;
    
    // Play the click sound
    clickSound.play();
    
    // Add pressed class to trigger animation
    button.classList.add("pressed");
    
    // Show alert message with different variations if button was clicked before
    if (buttonClicked) {
        // Randomly select a message variation
        var randomIndex = Math.floor(Math.random() * messageVariations.length);
        showAlert(messageVariations[randomIndex]);
    } else {
        // Show the default message if button is clicked for the first time
        showAlert(messageVariations[0]);
        buttonClicked = true;
    }
    
    // Remove pressed class after animation completes
    setTimeout(function() {
      button.classList.remove("pressed");
    }, 300); // Adjust duration to match animation duration
});

function showAlert(message) {
    var alertBox = document.createElement("div");
    alertBox.classList.add("dynamic-alert-box"); // Add dynamic-alert-box class
    alertBox.textContent = message;
    
    // Generate random coordinates for alert message
    var x = Math.random() * (window.innerWidth - alertBox.offsetWidth);
    var y = Math.random() * (window.innerHeight - alertBox.offsetHeight);
    
    // Ensure the alert box stays within the viewport dimensions
    x = Math.max(0, Math.min(x, window.innerWidth - alertBox.offsetWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - alertBox.offsetHeight));
    
    // Set position of alert message
    alertBox.style.left = x + "px";
    alertBox.style.top = y + "px";
    
    // Append alert message to body
    document.body.appendChild(alertBox);
    
    // Fade out alert message after 5 seconds
    setTimeout(function() {
        alertBox.style.opacity = 0;
        // Remove alert message from DOM after fading out
        setTimeout(function() {
            alertBox.parentNode.removeChild(alertBox);
        }, 500);
    }, 5000); // 5 seconds
}
