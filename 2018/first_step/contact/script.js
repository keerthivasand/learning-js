
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

    if(name_usr == ''){
        producePrompt('please enter name', 'name-error','red');
        return false;
    }
    else{
        producePrompt('Good Name', 'name-error','green');
    }
    if(phone_no == ''){
        producePrompt('please enter phone', 'phone-error','red');
        return false;
    }
    else{
        producePrompt('Valid', 'phone-error','green');
    }
    if(email_id == ''){
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
    return true;
}



