// Form validation
function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    let isValid = true;

    // Reset previous error states
    resetErrors();

    // Username validation
    if (username.value.trim().length < 3) {
        setError(username, 'Username must be at least 3 characters');
        isValid = false;
    } else {
        setSuccess(username);
    }

    // Password validation
    if (password.value.trim().length < 6) {
        setError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (isValid) {
        // Here you would typically send the form data to a server
        simulateLogin();
    }

    return false;
}

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}

// Set error state
function setError(input, message) {
    const inputGroup = input.parentElement;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
    
    // Create error message if it doesn't exist
    let errorMessage = inputGroup.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        inputGroup.appendChild(errorMessage);
    }
    
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Set success state
function setSuccess(input) {
    const inputGroup = input.parentElement;
    inputGroup.classList.remove('error');
    inputGroup.classList.add('success');
    
    const errorMessage = inputGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Reset error states
function resetErrors() {
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach(group => {
        group.classList.remove('error', 'success');
        const errorMessage = group.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }
    });
}

// Simulate login process
function simulateLogin() {
    const loginBtn = document.querySelector('.login-btn');
    const originalContent = loginBtn.innerHTML;
    
    // Disable button and show loading state
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    
    // Simulate API call
    setTimeout(() => {
        loginBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
        loginBtn.style.background = 'var(--success-color)';
        
        // Redirect or show success message
        setTimeout(() => {
            alert('Login successful! This is where you would redirect to the dashboard.');
            
            // Reset button state
            loginBtn.disabled = false;
            loginBtn.innerHTML = originalContent;
            loginBtn.style.background = '';
        }, 1500);
    }, 2000);
}

// Add input event listeners for real-time validation
document.getElementById('username').addEventListener('input', function() {
    if (this.value.trim().length >= 3) {
        setSuccess(this);
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (this.value.trim().length >= 6) {
        setSuccess(this);
    }
}); 