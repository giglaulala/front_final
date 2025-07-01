

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us!');
            contactForm.reset();
        });
    }

    const carouselContainer = document.getElementById('product-carousel');
    if (carouselContainer) {
        carouselContainer.innerHTML = `
            <button class="carousel-arrow left">&#8592;</button>
            <div class="carousel-track"></div>
            <button class="carousel-arrow right">&#8594;</button>
        `;
        const track = carouselContainer.querySelector('.carousel-track');
        const leftArrow = carouselContainer.querySelector('.carousel-arrow.left');
        const rightArrow = carouselContainer.querySelector('.carousel-arrow.right');
        let scrollAmount = 0;
        const scrollStep = 300;

        const loader = document.createElement('div');
        loader.className = 'carousel-loader';
        loader.innerHTML = '<span>Loading...</span>';
        track.appendChild(loader);

        leftArrow.addEventListener('click', () => {
            track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });
        rightArrow.addEventListener('click', () => {
            track.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });


        const totalImages = 20;
        track.innerHTML = '';
        for (let i = 0; i < totalImages; i++) {
            const id = Math.floor(Math.random() * 1000) + 1; // Picsum has many ids
            const imageUrl = `https://picsum.photos/id/${id}/200/200`;
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.innerHTML = `
                <img src="${imageUrl}" alt="Picsum ${id}" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x200?text=No+Image';" />
            `;
            track.appendChild(item);
        }
    }
});
