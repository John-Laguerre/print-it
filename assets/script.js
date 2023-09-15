// script.js
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let currentIndex = 0;

// Fonction pour afficher la diapositive actuelle
function showSlide(index) {
    if (index >= 0 && index < slides.length) {
        bannerImg.src = `assets/images/slideshow/${slides[index].image}`;
        bannerImg.alt = `Slide ${index + 1}`;
        document.querySelector('p').innerHTML = slides[index].tagLine;
    }
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Afficher la première diapositive au chargement de la page
showSlide(currentIndex);

