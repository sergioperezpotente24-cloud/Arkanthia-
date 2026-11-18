
// EMPEZAMOS EN LA PRIMERA DIAPOSITIVA
let currentIndex = 0;

// GUARDAMOS TODAS LAS DIAPOSITIVAS
const slides = document.querySelectorAll('.carrusel .carousel-item');

// CONTENEDOR DE LOS INDICADORES
const indicatorsContainer = document.querySelector('.indicators');

// CREAMOS LOS PUNTOS DEL CARRUSEL
slides.forEach((slide, index) => {

    const dot = document.createElement('button');

    dot.setAttribute('aria-label', 'Mostrar diapositiva ' + (index + 1));

    dot.addEventListener('click', () => goToSlide(index));

    indicatorsContainer.appendChild(dot);

});

// GUARDAMOS LOS PUNTOS
const indicators = document.querySelectorAll('.indicators button');

// ACTUALIZAR EL CARRUSEL
function updateCarousel() {

    slides.forEach((slide, index) => {

        slide.classList.toggle('active', index === currentIndex);

        indicators[index].classList.toggle('active', index === currentIndex);

    });

}

// PASAR A LA SIGUIENTE DIAPOSITIVA
function nextSlide() {

    currentIndex = (currentIndex + 1) % slides.length;

    updateCarousel();

}

// VOLVER A LA DIAPOSITIVA ANTERIOR
function prevSlide() {

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    updateCarousel();

}

// IR A UNA DIAPOSITIVA CONCRETA
function goToSlide(index) {

    currentIndex = index;

    updateCarousel();

}

// CAMBIO AUTOMATICO CADA 3 SEGUNDOS
setInterval(nextSlide, 3000);

// MOSTRAMOS LA PRIMERA DIAPOSITIVA
updateCarousel();
