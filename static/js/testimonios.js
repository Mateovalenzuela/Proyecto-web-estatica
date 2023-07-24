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

// Mostrar los testimonial-card al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const firstTwoTestimonials = Array.from(testimonialCards).slice(0, 2);

    firstTwoTestimonials.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
});

// Evento para mostrar los testimonial-card al hacer scroll
window.addEventListener('scroll', showTestimonialCards);
