var pass = document.querySelector('#user');
pass.addEventListener('keyup', function(e) {
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (user.value.length == 0 || user.value.length < 6) {
        user.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    } else {
       user.style.border = '1px solid green';
       u_times.style.display = 'none';
       u_check.style.display = 'block';
    }
});

function validate() {
    var user = document.querySelector('#user');
    var pass = document.querySelector('#pass');
    if (user.value == 'user' && pass.value == '0000') {
        alert('Login Successful');
        window.location.href = 'hm.html'; // Redirect to hm.html after successful login
        return false; // Prevent form submission
    } else {
        alert('Login Failed! Please try again.');
        return false; // Prevent form submission
    }
}

function togglePassword() {
    var x = document.getElementById("pass");
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}
