document.addEventListener("DOMContentLoaded", function() {
    var textOverlay = document.querySelector(".text-overlay");
    textOverlay.style.opacity = "1";
  });

  document.addEventListener("DOMContentLoaded", function() {
    var headerHeight = document.querySelector("header").offsetHeight;
    document.documentElement.style.setProperty("--header-height", headerHeight + "px");
  });

  function hacerClic(elemento) {
    // Agregar la clase "left" al hacer clic en el elemento
    elemento.classList.add("left")
    // Agregar un evento transitionend al elemento para restablecer la posición después de la transición
    
    setTimeout(function() {
        elemento.classList.remove("left");
      }, 7000); // 3000 milisegundos = 3 segundos
    
  }

  // Agregar evento de clic a todos los elementos con la clase ".imagen-fixed"
  var elementosImagenFixed = document.querySelectorAll(".imagen-fixed");
  elementosImagenFixed.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
      hacerClic(elemento); // Pasar el elemento al que se le hizo clic como argumento
    });
  });

  

