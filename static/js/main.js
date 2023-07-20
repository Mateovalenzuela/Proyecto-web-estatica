document.addEventListener("DOMContentLoaded", function () {
  var textOverlay = document.querySelector(".text-overlay");
  textOverlay.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", function () {
  var headerHeight = document.querySelector("header").offsetHeight;
  document.documentElement.style.setProperty("--header-height", headerHeight + "px");
});

function hacerClic(elemento) {
  // Agregar la clase "left" al hacer clic en el elemento
  elemento.classList.add("left")
}

// Agregar evento de clic a todos los elementos con la clase ".imagen-fixed"
var elementosImagenFixed = document.querySelectorAll(".imagen-fixed");
elementosImagenFixed.forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    hacerClic(elemento); // Pasar el elemento al que se le hizo clic como argumento
    let contenedorDesc = elemento.nextElementSibling; // Obtener el siguiente hermano, que es el contenedor-descripcion
    contenedorDesc.hidden = false; // Mostrar el contenedor-descripcion

    // Capturar los elementos con la clase "maquina-escribir" dentro del contenedor-descripcion
    var elementosMaquinaEscribir = contenedorDesc.querySelectorAll(".maquina-escribir");
    // Hacer lo que necesites con los elementos capturados
    elementosMaquinaEscribir.forEach(function (elementoMaquina) {
      aplicarMaquinaEscribir(elementoMaquina)
    });
  });
});





  // Función para aplicar la animación de máquina de escribir a cada elemento
  function aplicarMaquinaEscribir(elemento) {
    var texto = elemento.innerText; // Obtener el texto del elemento
    elemento.innerText = ""; // Vaciar el contenido del elemento
    var index = 0;

    // Función para simular la escritura letra por letra
    function escribir() {
      elemento.innerText = texto.slice(0, index);
      index++;

      // Verificar si se ha escrito todo el texto
      if (index <= texto.length) {
        setTimeout(escribir, 30); // Velocidad de escritura (30ms)
      }
    }

    // Iniciar la escritura después de un breve retraso (500ms)
    setTimeout(escribir, 500);
  }

  


