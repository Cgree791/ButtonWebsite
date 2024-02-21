document.getElementById("myButton").addEventListener("click", function() {
    var button = document.getElementById("myButton");
    var alertBox = document.getElementById("alertBox");
    
    // Add pressed class to trigger animation
    button.classList.add("pressed");
    
    // Show alert message
    alertBox.style.opacity = 1;
    alertBox.textContent = "You are adopted!";
    
    // Fade out alert message after 5 seconds
    setTimeout(function() {
      alertBox.style.opacity = 0;
    }, 5000); // 5 seconds
  
    // Remove pressed class after animation completes
    setTimeout(function() {
      button.classList.remove("pressed");
    }, 300); // Adjust duration to match animation duration
  });
  