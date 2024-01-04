document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function validateForm() {
        var name = document.getElementById('name').value;
        var mobile = document.getElementById('mobile').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name.trim() === '' || mobile.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields');
            return false;
        }

        // Simple email validation using a regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        return true; // Form is valid
    }
});
