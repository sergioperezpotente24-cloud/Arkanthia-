
// DIAPOSITIVA ACTUAL
let currentIndex = 0;

// GUARDAMOS LAS IMAGENES
const slides = document.querySelectorAll(
    "#carruselPrincipal .carousel-item"
);

// CONTENEDOR DE LOS INDICADORES
const indicatorsContainer = document.querySelector(
    "#carruselPrincipal .indicators"
);

// CREAMOS LOS INDICADORES
slides.forEach((slide, index) => {

    const indicator = document.createElement("div");

    indicator.addEventListener("click", () => {
        goToSlide(index);
    });

    indicatorsContainer.appendChild(indicator);

});

// GUARDAMOS LOS INDICADORES
const indicators = document.querySelectorAll(
    "#carruselPrincipal .indicators div"
);

// MOSTRAR LA IMAGEN ACTUAL
function updateCarousel() {

    slides.forEach((slide, index) => {

        slide.classList.toggle(
            "active",
            index === currentIndex
        );

        indicators[index].classList.toggle(
            "active",
            index === currentIndex
        );

    });

}

// SIGUIENTE IMAGEN
function nextSlide() {

    currentIndex = (currentIndex + 1) % slides.length;

    updateCarousel();

}

// IMAGEN ANTERIOR
function prevSlide() {

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    updateCarousel();

}

// IR A UNA IMAGEN CONCRETA
function goToSlide(index) {

    currentIndex = index;

    updateCarousel();

}

// CAMBIAR AUTOMATICAMENTE CADA 3 SEGUNDOS
setInterval(nextSlide, 3000);

// MOSTRAR LA PRIMERA IMAGEN
updateCarousel();
