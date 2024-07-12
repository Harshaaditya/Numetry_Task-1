document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;
    let address = document.getElementById('address').value;

    if (validateForm(firstname, lastname, email, phone, dob, gender, address)) {
        alert('Registration Successful!');
    } else {
        alert("Please check details");
    }
});

function validateForm(firstname, lastname, email, phone, dob, gender, address) {
    if (firstname === '' || lastname === '' || email === '' || phone === '' || dob === '' || gender === '' || address === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (!validateName(firstname)) {
        document.getElementById('firstname').focus();
        return false;
    }

    if (!validateName(lastname)) {
        document.getElementById('lastname').focus();
        return false;
    }

    if (!validateEmail(email)) {
        document.getElementById('email').focus();
        return false;
    }

    if (!validatePhone(phone)) {
        document.getElementById('phone').focus();
        return false;
    }

    return true;
}

function validateName(name) {
    const namePattern = /^[a-zA-Z]+$/;
    if (!namePattern.test(name)) {
        alert('Name must contain only alphabets.');
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (email.includes('..')) {
        alert('Email contains multiple consecutive periods.');
        return false;
    }

    const atSymbol = email.indexOf('@');
    const dotSymbol = email.lastIndexOf('.');

    if (atSymbol < 1 || dotSymbol <= atSymbol + 1 || dotSymbol >= email.length - 1) {
        alert('Please enter a valid email address.');
        return false;
    }

    const allowedSpecialChars = /^[a-zA-Z0-9@.]+$/;
    if (!allowedSpecialChars.test(email)) {
        alert('Email contains invalid special characters.');
        return false;
    }

    return true;
}

function validatePhone(phone) {
    const firstDigit = phone.charAt(0);
    if ((firstDigit !== '6' &&  firstDigit !== '7'  && firstDigit !== '8' && firstDigit !== '9') || phone.length !== 10 || isNaN(phone)) {
        alert('Please enter a valid 10-digit phone number. Phone number must start with 6, 7, 8, or 9.');
        return false;
    }

    return true;
}