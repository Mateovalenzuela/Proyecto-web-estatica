// Función para cargar contenido desde el archivo JSON
function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/static/proyectos_terminados.json', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var contenidoJSON = JSON.parse(xhr.responseText);
        var contenidoHTML = '';
        let idColumna = 1
        let count = 0;
        contenidoJSON.forEach(function(item) {
            
            if (count == 5){
                document.getElementById('proyectos' + idColumna).innerHTML = contenidoHTML;
                idColumna++;
                count = 0
                contenidoHTML = ""
            }
            
            contenidoHTML += `<img src="${item.src}" alt="${item.alt}">`;
            count++;
          });
  
        // Agregar el contenido HTML al contenedor
        document.getElementById('proyectos' + idColumna).innerHTML = contenidoHTML;
      }
    };
    xhr.send();
  }
  
  // Llamar a la función para cargar el contenido al cargar la página
  window.onload = cargarContenido;
  