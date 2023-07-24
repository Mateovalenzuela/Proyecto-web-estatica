// JavaScript
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showTestimonialCards() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach((card, index) => {
        if (index >= 2 && isElementInViewport(card) && card.style.opacity !== '1') {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}




function cargarContenido() {
    fetch('../static/data/testimonios.json')
      .then(response => response.json())
      .then(contenidoJSON => {
        var contenidoHTML = '';
        contenidoJSON.forEach(function(item) {
        contenidoHTML += `
    <div class="col-md-6 mb-3">
        <div class="testimonial-card">
            <div class="testimonial-content">
                <img src="${item.src}" alt="${item.alt}">
                <p class="testimonial-text">${item.descripcion}</p>
                <p class="testimonial-author">${item.autor}</p>
            </div>
        </div>
    </div>`
        });
  
        // Agregar el contenido HTML al contenedor
        document.getElementById('testimonios').innerHTML = contenidoHTML;
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
  }
  

  // Mostrar los testimonial-card al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    cargarContenido();
    setTimeout(function(){
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const firstTwoTestimonials = Array.from(testimonialCards).slice(0, 2);
    
        firstTwoTestimonials.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 60);
    
});

// Evento para mostrar los testimonial-card al hacer scroll
window.addEventListener('scroll', showTestimonialCards);
