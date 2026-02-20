// Get form elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageError');

const successMessage = document.getElementById('successMessage');

// Add event listeners for real-time validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
messageInput.addEventListener('blur', validateMessage);

// Validation functions
function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        nameError.textContent = 'Name is required';
        nameInput.classList.add('error');
        return false;
    } else if (name.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long';
        nameInput.classList.add('error');
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Name should contain only letters and spaces';
        nameInput.classList.add('error');
        return false;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('error');
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        emailError.textContent = 'Email is required';
        emailInput.classList.add('error');
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('error');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
        return true;
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    const phonePattern = /^[0-9]{10}$/;
    
    if (phone === '') {
        phoneError.textContent = 'Phone number is required';
        phoneInput.classList.add('error');
        return false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Phone number must be exactly 10 digits';
        phoneInput.classList.add('error');
        return false;
    } else {
        phoneError.textContent = '';
        phoneInput.classList.remove('error');
        return true;
    }
}

function validateMessage() {
    const message = messageInput.value.trim();
    if (message === '') {
        messageError.textContent = 'Message is required';
        messageInput.classList.add('error');
        return false;
    } else if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        messageInput.classList.add('error');
        return false;
    } else {
        messageError.textContent = '';
        messageInput.classList.remove('error');
        return true;
    }
}

// Form submission handler
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();
    
    // If all fields are valid, show success message
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        successMessage.style.display = 'block';
        form.style.display = 'none';
        
        // Reset form after 3 seconds
        setTimeout(function() {
            form.reset();
            form.style.display = 'block';
            successMessage.style.display = 'none';
            nameInput.classList.remove('error');
            emailInput.classList.remove('error');
            phoneInput.classList.remove('error');
            messageInput.classList.remove('error');
        }, 3000);
    }
});
