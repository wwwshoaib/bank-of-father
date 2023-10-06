// step-1: add click add event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3-1: set id on the html element
    // 3-2:get the element
    //3-3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: Do not verify email and password on the client side

    // step-4: Verify email and password
    if(email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }

    else {
        alert('invalid password or email');
    }

    
    

    
})