document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carouselImagesContainer = document.querySelector(".carousel-images");

  // Fonction pour charger les images à partir du fichier JSON
  fetch('images.json')  // Assure-toi que le fichier JSON est accessible ici
    .then(response => response.json())
    .then(images => {
      // Insérer les images dans le carrousel
      images.forEach(imagePath => {
        const img = document.createElement("img");
        img.src = imagePath; // Utiliser le chemin des images dans le JSON
        img.alt = `Image`;  // Optionnel : tu peux personnaliser l'alt
        img.style.display = "none";  // Cacher les images au départ
        carouselImagesContainer.appendChild(img);
      });

      // Afficher la première image
      function updateCarousel() {
        const allImages = carouselImagesContainer.querySelectorAll("img");
        allImages.forEach((img, index) => {
          img.style.display = index === currentIndex ? "block" : "none";
        });
      }

      // Aller à l'image précédente
      prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
      });

      // Aller à l'image suivante
      nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
      });

      // Initialiser le carrousel
      updateCarousel();
    })
    .catch(error => {
      console.error("Erreur lors du chargement des images : ", error);
    });
});
