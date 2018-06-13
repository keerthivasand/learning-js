
// var submit_btn = document.querySelector('.submit-btn');

// submit_btn.addEventListener('click', validateForm);
function producePrompt(message,err_id,color){
    document.getElementById(err_id).innerHTML = message;
    document.getElementById(err_id).style.color = color;
}
function validateForm(){
    var name_usr = document.getElementById('contact-name').value;
    var phone_no = document.getElementById('contact-phone').value;
    var email_id = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;
    var charAZ = /^[a-zA-Z\s]+$/;
    var phoneno = /^\d{10}$/;
    var emailval = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(name_usr == '' || !name_usr.match(charAZ) ){
        producePrompt('Please enter valid name. Your name should contain only A-Z Letters', 'name-error','red');
        return false;
    }
    else{
        producePrompt('Good Name', 'name-error','green');        
    }
    if(phone_no == '' || !phone_no.match(phoneno)){
        producePrompt('please enter valid phone', 'phone-error','red');
        return false;
    }
    else{
        producePrompt('Valid', 'phone-error','green');        
    }
    if(email_id == '' || !email_id.match(emailval)){
        producePrompt('please enter email', 'email-error','red');
        return false;
    }
    else{
        producePrompt('Okay', 'email-error','green');
    }
    if(message == ''){
        producePrompt('please enter message', 'message-error','red');
        return false;
    }
    else{
        producePrompt('Thanks', 'message-error','green');
    }
    alert("Your Form Submitted");
    return true;
}



