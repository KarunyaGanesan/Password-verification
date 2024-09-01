document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('errorMessage');
    var rightMessage = document.getElementById('rightMessage')
    
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match. Please try again.";
       
    } else {
        rightMessage.textContent = "Passwords match! Form submitted.";
        errorMessage.style.display ="none"
        // Here, you can proceed with form submission or further processing.
    }
});
