// script.js
fetch('images.json')
    .then(response => response.json())
    .then(images => {
        const carouselInner = document.querySelector('.carousel-inner');
        images.forEach((image, index) => {
            const isActive = index === 0 ? 'active' : '';
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item', isActive);
            carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="Image">`;
            carouselInner.appendChild(carouselItem);
        });
    })
    .catch(error => console.error('Error loading images:', error));
