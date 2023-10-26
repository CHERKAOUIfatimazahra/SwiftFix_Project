/* inputs and form /* inputs and form selector */
const form = document.getElementById("contact_Form");
const fname_input = document.getElementById("fname_input");
const lname_input = document.getElementById("lname_input");
const phone_input = document.getElementById("phone_input");
const email_input = document.getElementById("email_input");
const select_services = document.getElementById("select_services");
const message_input = document.getElementById("message_input");

/* error span selector */
const fname_error = document.getElementById("fname_error");
const lname_error = document.getElementById("lname_error");
const pnumber_error = document.getElementById("pnumber_error");
const email_error = document.getElementById("email_error");
const service_error = document.getElementById("service_error");
const message_error = document.getElementById("message_error");


/* regex validation */
const fname_Regex = /^[A-Za-z]+\s{1}[A-Za-z]+$/;
const lname_Regex = /^[A-Za-z]+\s{1}[A-Za-z]+$/;
const phone_Regex = /^\+[212-]+[6|7]+\d{8}$/;
const email_Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// ***********************************************
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const fname_Value = fname_input.value.trim();
    const fname_input_value = lname_input.value.trim();
    const phone_input_input = phone_input.value.trim();
    const email_input_input = email_input.value.trim();
    const select_services_input = select_services.value.trim();
    const message_input_input = message_input.value.trim();

    if (fname_Value === null || fname_Value === "" || !fname_Regex.test(fname_input_input)) {
        fname_error.textContent = 'Your first name is invalid';
    }else{
        fname_error.textContent = '';
    }
    if (fname_input_value === null || fname_input_value === "" || !lname_Regex.test(lname_input_input)) {
        lname_error.textContent = 'Your last name is invalid';
    }else{
        lname_error.textContent = '';
    }

    if (phone_input_input === null || phone_input_input === "" || !phone_Regex.test(phone_input_input)) {
        pnumber_error.textContent = "phone number is invalide";
    }else{
        pnumber_error.textContent = '';
    }

    if (email_input_input === null || email_input_input === "" || !email_Regex.test(email_input_input)) {
        email_error.textContent = "email is invalide";
    }else{
        email_error.textContent = '';
    }
    if (select_services_input === null || select_services_input === "") {
        service_error.textContent = "email is invalide";
    }else{
        service_error.textContent = '';
    }

    if (message_input_input === null || message_input_input === "") {
        message_error.textContent = "email is invalide";
    }else{
        message_error.textContent = '';
    }
});