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
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points

let currentIndex = 0;

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}

// Fonction pour afficher la diapositive actuelle
function showSlide(index, direction){
    if (index >= 0 && index < slides.length) {
        bannerImg.src = `assets/images/slideshow/${slides[index].image}`;
        bannerImg.alt = `Slide ${index + 1}`;
        document.querySelector('p').innerHTML = slides[index].tagLine;
    }
	console.log('clic sur la flèche ${direction}')
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex, 'left'); // Indiquer que la flèche gauche a été cliquée
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex, 'right'); // Indiquer que la flèche droite a été cliquée
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});


// Afficher la première diapositive au chargement de la page
showSlide(currentIndex, 'démarrage');
updateDots(currentIndex); // Mettez à jour les points indicateurs pour la première diapositive

