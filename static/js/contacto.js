
function validar() {
    document.getElementById("form-contacto").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    const nombre = document.getElementById("txt-nombre");
    const apellido = document.getElementById("txt-apellido");
    const email = document.getElementById("txt-email");
    const mensaje = document.getElementById("txt-mensaje");
    const telefono = document.getElementById("txt-telefono");
    const asunto = document.getElementById("txt-asunto");
    const opciones = document.getElementsByName("opciones");

    const nombre_validacion = document.getElementById("valid-nombre");
    const apellido_validacion = document.getElementById("valid-apellido")
    const email_validacion = document.getElementById("valid-email")
    const mensaje_validacion = document.getElementById("valid-mensaje")
    const telefono_validacion = document.getElementById("valid-telefono");
    const asunto_validacion = document.getElementById("valid-asunto");
    const opciones_validacion = document.getElementById("valid-opciones");

    let todoValido = true;

    if (validar_nombre(nombre.value)) {
        nombre_validacion.innerHTML = "Nombre válido";
        nombre_validacion.className = "valido";
    } else {
        nombre_validacion.innerHTML = "Nombre inválido";
        nombre_validacion.className = "invalido";
        todoValido = false;
    }

    if (validar_apellido(apellido.value)) {
        apellido_validacion.innerHTML = "Apellido válido";
        apellido_validacion.className = "valido";
    } else {
        apellido_validacion.innerHTML = "Apellido inválido";
        apellido_validacion.className = "invalido";
        todoValido = false;
    }

    if (validar_email(email.value)) {
        email_validacion.innerHTML = "Email válido";
        email_validacion.className = "valido";
    } else {
        email_validacion.innerHTML = "Email inválido";
        email_validacion.className = "invalido";
        todoValido = false;
    }

    if (validar_mensaje(mensaje.value)) {
        mensaje_validacion.innerHTML = "Mensaje válido";
        mensaje_validacion.className = "valido";
    } else {
        mensaje_validacion.innerHTML = "Mensaje inválido";
        mensaje_validacion.className = "invalido";
        todoValido = false;
    }

    if (validar_telefono(telefono.value)) {
        telefono_validacion.innerHTML = "Teléfono válido";
        telefono_validacion.className = "valido";
    } else {
        telefono_validacion.innerHTML = "Teléfono inválido";
        telefono_validacion.className = "invalido";
        todoValido = false;
    }

    if (validar_opcion(asunto.value)){
        asunto_validacion.innerHTML = "Opción válida";
        asunto_validacion.className = "valido";
    }else{
        asunto_validacion.innerHTML = "Seleccione una opción";
        asunto_validacion.className = "invalido";
        todoValido = false;
    }

    if (validar_radio(opciones)){
        opciones_validacion.innerHTML = "Opción válida";
        opciones_validacion.className = "valido";
    }else{
        opciones_validacion.innerHTML = "Seleccione una opción";
        opciones_validacion.className = "invalido";
        todoValido = false;
    }


    if (todoValido) {
        const btnGuardar = document.getElementById('btn-enviar-form');

        btnGuardar.textContent = '\u2713'; // Unicode checkmark symbol
        btnGuardar.classList.toggle('round');
        setTimeout(function () {
            btnGuardar.classList.toggle('check');
        }, 500); // La animación de transformación tarda 0.5 segundos (500ms)
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

function validar_telefono(telefono) {
    const patron = /^[0-9]{10}$/;
    return patron.test(telefono);
  }

function validar_opcion(opcion) {
    if (opcion !== "0"){
        console.log(opcion);
        return true;
    }
    return false;
}

function validar_radio(opciones){
    let valorSeleccionado = '';
    opciones.forEach(opcion => {
        if (opcion.checked) {
          valorSeleccionado = opcion.value;
        }
      });
    if (valorSeleccionado !== ''){
        return true;
    }
    return false;
}


// Función para agregar animaciones a las redes sociales
function agregarAnimaciones() {
    // Obtener todos los enlaces de redes sociales
    const redesSociales = document.querySelectorAll(".nav-link-redes");

    // Animaciones personalizadas
    const animaciones = [
      "rotate-animation",
      "fade-in-animation",
      "slide-left-animation",
      "bounce-animation",
      "pulse-animation"
    ];

    // Agregar animaciones a las redes sociales
    redesSociales.forEach((red, index) => {
      red.classList.add(animaciones[index]);
    });
  }

  // Llamar a la función para agregar las animaciones al cargar la página
  window.onload = agregarAnimaciones;

  