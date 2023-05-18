
function validar() {
    document.getElementById("form-contacto").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    const nombre = document.getElementById("txt-nombre");
    const apellido = document.getElementById("txt-apellido");
    const email = document.getElementById("txt-email");
    const mensaje = document.getElementById("txt-mensaje");

    const nombre_validacion = document.getElementById("valid-nombre");
    const apellido_validacion = document.getElementById("valid-apellido")
    const email_validacion = document.getElementById("valid-email")
    const mensaje_validacion = document.getElementById("valid-mensaje")

    if (validar_nombre(nombre.value)) {
        nombre_validacion.innerHTML = "Nombre válido";
        nombre_validacion.className = "valido";
    } else {
        nombre_validacion.innerHTML = "Nombre inválido";
        nombre_validacion.className = "invalido";
    }

    if (validar_apellido(apellido.value)) {
        apellido_validacion.innerHTML = "Apellido válido";
        apellido_validacion.className = "valido";
    } else {
        apellido_validacion.innerHTML = "Apellido inválido";
        apellido_validacion.className = "invalido";
    }

    if (validar_email(email.value)) {
        email_validacion.innerHTML = "Email válido";
        email_validacion.className = "valido";
    } else {
        email_validacion.innerHTML = "Email inválido";
        email_validacion.className = "invalido";
    }

    if (validar_mensaje(mensaje.value)) {
        mensaje_validacion.innerHTML = "Mensaje válido";
        mensaje_validacion.className = "valido";
    } else {
        mensaje_validacion.innerHTML = "Mensaje inválido";
        mensaje_validacion.className = "invalido";
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

function validar_apellido(apellido) {
    const patron = /^[a-zA-Z]{2,50}$/;
    return patron.test(apellido);
}

function validar_mensaje(mensaje) {
    const patron = /^[a-zA-Z]{4,200}$/;
    return patron.test(mensaje);
}