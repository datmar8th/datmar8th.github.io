function clickSubmit(event){
    event.preventDefault();
    let email = document.getElementById('email').value;
    let fullname = document.getElementById('fullname').value;
    console.log(email, fullname);
    if(validateEmail(email)){
        alert('OK');
    }
    else{
        alert('Please input right email');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}