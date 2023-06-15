let fname = document.querySelector('#fName');
let lastName = document.querySelector('#lName');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');
let form = document.querySelector('#form');
let error = 0;
//at first i work for error handaling 

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "from_control error";
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

function showSucsess(input) {
    const formControl = input.parentElement;
    formControl.className = "from_control sucsess";
}
// work with email validate

function checkmail(input) {
    const regEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (regEX.test(input.value)) {
        showSucsess(input);
    } else {
        showError(input, "email is not valid");
    }
}
// input fieldname value length 

function checkInputLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${GetFieldName(input)} user name must be ${min} charecter`);
    }
        else if(input.value.length > max){
            showError(input, `${GetFieldName(input)} user name must be less then ${max} charecter`);
    }else{
        showSucsess(input)
    }
}
// then work with field name

function GetFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// check password match 

function checkPasswordMatch(input1,input2){
    if(input1.value != input2.value){
        showError(input2, "password dosnt match")
    }
}
form.addEventListener('submit', (e)=> {
   e.preventDefault();
   checkInputLength(fName , 4 , 20);
   checkInputLength(lName , 4 , 20);
   checkInputLength(password , 8 , 30);
   checkmail(email);
   checkPasswordMatch(password , password2);
})