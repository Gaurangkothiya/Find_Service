
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});


function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (username == "") {
        document.getElementById('div1').innerHTML = "** Please fill the username field.";
        document.getElementById('div1').style.color = "Red";
        return false;
    }
    if (username.length <= 2 || username.length > 20) {
        document.getElementById('div1').innerHTML = "** The length of username must be between 2-20.";
        document.getElementById('div1').style.color = "Red";
        return false;
    }
    if (!isNaN(username)) {
        document.getElementById('div1').innerHTML = "** Only characters are allowed.";
        document.getElementById('div1').style.color = "Red";
        return false;
    }

    if (email == "") {
        document.getElementById('div2').innerHTML = "** Please fill the email id field.";
        document.getElementById('div2').style.color = "Red";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('div2').innerHTML = "** Please enter valid email id.";
        document.getElementById('div2').style.color = "Red";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('div2').innerHTML = "** Please enter valid email id.";
        document.getElementById('div2').style.color = "Red";
        return false;
    }

    if (password == "") {
        document.getElementById('div3').innerHTML = "** Please fill the password field.";
        document.getElementById('div3').style.color = "Red";
        return false;
    }
    if (password.length <= 5 || password.length > 20) {
        document.getElementById('div3').innerHTML = "** The length of password must be between 5-20.";
        document.getElementById('div3').style.color = "Red";
        return false;
    }

    if (confirmPassword == "") {
        document.getElementById('div4').innerHTML = "** Please fill the confirm password field.";
        document.getElementById('div4').style.color = "Red";
        return false;
    }
    if (password != confirmPassword) {
        document.getElementById('div4').innerHTML = "** Password and Confirm Password does not match.";
        document.getElementById('div4').style.color = "Red";
        return false;
    }

    if (mobileNumber == "") {
        document.getElementById('div5').innerHTML = "** Please fill the mobile number field.";
        document.getElementById('div5').style.color = "Red";
        return false;
    }
    if (isNaN(mobileNumber)) {
        document.getElementById('div5').innerHTML = "** Please enter digits only.";
        document.getElementById('div5').style.color = "Red";
        return false;
    }
    if (mobileNumber.length != 10) {
        document.getElementById('div5').innerHTML = "** Mobile number must be of 10 digits only.";
        document.getElementById('div5').style.color = "Red";
        return false;
    }
}
function validate_login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "") {
        document.getElementById('div1').innerHTML = "** Please fill the username field.";
        document.getElementById('div1').style.color = "Red";
        return false;
    }
    if (username.length <= 2 || username.length > 20) {
        document.getElementById('div1').innerHTML = "** The length of username must be between 2-20.";
        document.getElementById('div1').style.color = "Red";
        return false;
    }
    if (!isNaN(username)) {
        document.getElementById('div1').innerHTML = "** Only characters are allowed.";
        document.getElementById('div1').style.color = "Red";
        return false;
    }

    if (password == "") {
        document.getElementById('div3').innerHTML = "** Please fill the password field.";
        document.getElementById('div3').style.color = "Red";
        return false;
    }
}