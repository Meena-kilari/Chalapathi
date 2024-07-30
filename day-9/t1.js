function formValidation() {
    var username1 = document.registration.username.value;
    var age1 = document.registration.age.value;
    var pincode1 = document.registration.pincode.value;
    var pan1 = document.registration.pan.value;
    var password1 = document.registration.password.value;

    if (user_name(username1)) {
    if (age_valid(age1)) {
    if (pin_code(pincode1)) {
    if (p_an(pan1)) {
    if (pass_word(password1)) {
        alert('Form submitted successfully');
        window.location.reload();
        return true;
    }
    }
    }
    }
    }
    return false;
}

function user_name(username1) {
    if (username1.length < 8 || username1.length > 10) {
        alert('Username must be between 8 and 10 characters.');
        return false;
    } else {
        return true;
    }
}

function age_valid(age1) {
    if (age1 < 0 || age1 > 99 || isNaN(age1)) {
        alert('Age must be between 0 and 99.');
        return false;
    } else {
        return true;
    }
}

function pin_code(pincode1) {
    if (!/^\d{6}$/.test(pincode1)) {
        alert('Pin Code must be exactly 6 digits.');
        return false;
    } else {
        return true;
    }
}

function p_an(pan1) {
    if (!/^[A-Z0-9]{10}$/.test(pan1)) {
        alert('PAN Number must be exactly 10 characters with capital letters and numbers.');
        return false;
    } else {
        return true;
    }
}

function pass_word(password1) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10}$/;
    if (!passwordPattern.test(password1)) {
        alert('Password must be exactly 10 characters long and include 1 capital letter, 1 number, 1 special character, and small letters.');
        return false;
    } else {
        return true;
    }
}