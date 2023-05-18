function validar_presupuesto() {
    document.getElementById("form-presupuesto").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    const nombre = document.getElementById("txt-nombre-p");
    const email = document.getElementById("txt-email-p");
    const metros = document.getElementById("txt-metros-p");

    const radioPared = document.getElementById("txt-pared-p").checked;
    const radiotechado = document.getElementById("txt-techado-p").checked;
    const radioOtro = document.getElementById("txt-otro-p").checked;
    

    const nombre_validacion = document.getElementById("valid-nombre-p");
    const email_validacion = document.getElementById("valid-email-p")
    const metros_validacion = document.getElementById("valid-metros-p")
    const trabajo_validacion = document.getElementById("valid-trabajo-p")

    if (validar_nombre(nombre.value)) {
        nombre_validacion.innerHTML = "Nombre válido";
        nombre_validacion.className = "valido";
    } else {
        nombre_validacion.innerHTML = "Nombre inválido";
        nombre_validacion.className = "invalido";
    }


    if (validar_email(email.value)) {
        email_validacion.innerHTML = "Email válido";
        email_validacion.className = "valido";
    } else {
        email_validacion.innerHTML = "Email inválido";
        email_validacion.className = "invalido";
    }

    if (validar_metros(metros.value)) {
        metros_validacion.innerHTML = "Medidas válidas";
        metros_validacion.className = "valido";
    } else {
        metros_validacion.innerHTML = "Medidas inválidas";
        metros_validacion.className = "invalido";
    }

    if (validar_trabajos(radiotechado, radioPared, radioOtro)) {
        trabajo_validacion.innerHTML = "Opción válida";
        trabajo_validacion.className = "valido";
    } else {
        trabajo_validacion.innerHTML = "Seleccione una opción";
        trabajo_validacion.className = "invalido";
    }

}


function validar_email(email) {
    const patron = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/;
    return patron.test(email);
}

function validar_nombre(nombre) {
    const patron = /^[a-zA-Z]{2,50}$/;
    return patron.test(nombre);
}


function validar_metros(metros) {
    const patron = /^[0-9]{1,6}(\.[0-9]{1,3})?$/;
    return patron.test(metros);
}

function validar_trabajos(op1, op2, op3){
    if (op1 || op2 || op3){
        return true;
    }
    else {
        return false;
    }
}

