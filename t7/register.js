const form = document.querySelector('form');
const registerButton = document.querySelector('.button-register')
const firstName = document.querySelector('input[name="first_name"]');
const lastName = document.querySelector('input[name="last_name"]');


firstName.addEventListener('keyup', e => {
    e.preventDefault();

    if(firstName.value == lastName.value){  
        // firstName.parentElement.style.color = "violet"; 
        // firstName.parentElement.classList.add = "inValid";
        firstName.parentElement.className = "input_container Invalid";
        console.log('invalid');
    }else{
        // firstName.parentElement.style.color = "limegreen";
        // firstName.parentElement.classList.add = "Valid";
        // console.log(firstName.parentElement.classList, '999ammy')    
        firstName.parentElement.className = "input_container Valid";
        console.log('Valid')
    }
})

lastName.addEventListener('keyup', e =>{
    e.preventDefault();
    
    if(firstName.value == lastName.value){       
        // lastName.parentElement.style.color = "white"; 
        // lastName.parentElement.classList.add = "inValid"
        lastName.parentElement.className = "input_container Invalid";
        console.log('invalid');
    }else{
        // lastName.parentElement.style.color = "limegreen"; 
        // lastName.parentElement.classList.add = "Valid";
        lastName.parentElement.className = "input_container Valid"
        console.log('Valid')
    }
})
