function cargarContenido() {
  fetch('../static/data/proyectos_terminados.json')
    .then(response => response.json())
    .then(contenidoJSON => {
      var contenidoHTML = '';
      let idColumna = 1;
      let count = 0;
      contenidoJSON.forEach(function(item) {
        if (count == 5) {
          document.getElementById('proyectos' + idColumna).innerHTML = contenidoHTML;
          idColumna++;
          count = 0;
          contenidoHTML = "";
        }

        contenidoHTML += `<img src="${item.src}" alt="${item.alt}">`;
        count++;
      });

      // Agregar el contenido HTML al contenedor
      document.getElementById('proyectos' + idColumna).innerHTML = contenidoHTML;
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
}

// Llamar a la función para cargar el contenido al cargar la página
window.onload = cargarContenido;
