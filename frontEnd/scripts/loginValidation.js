const form = document.querySelector("form"),
idField = form.querySelector(".login__id"),
idInput = idField.querySelector("input"),
passwordField = form.querySelector(".login__password"),
passwordInput = passwordField.querySelector("input");

form.onsubmit = ()=>{
    if(idInput.value == ""){
        idField.classList.add("error");
        return false;
    }
    if(passwordInput.value == ""){
        passwordField.classList.add("error");
        return false;
    }
}

idInput.onkeyup = ()=>{
    if(idInput.value == ""){
        idField.classList.add("error");
    } else{
        idField.classList.remove("error");
    }
}

passwordInput.onkeyup = ()=>{
    if(passwordInput.value == ""){
        passwordField.classList.add("error");
    }else{
        passwordField.classList.remove("error");
    }
}
