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
            <div class="carousel-viewport"><div class="carousel-track"></div></div>
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
            const id = Math.floor(Math.random() * 1000) + 1;
            const imageUrl = `https://picsum.photos/id/${id}/200/200`;
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.innerHTML = `
                <img src="${imageUrl}" alt="Picsum ${id}" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x200?text=No+Image';" />
            `;
            track.appendChild(item);
        }
    }

    const aboutImageDiv = document.querySelector('.about-image');
    if (aboutImageDiv) {
        const id = Math.floor(Math.random() * 1000) + 1;
        const imageUrl = `https://picsum.photos/id/${id}/400/400`;
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `About Us Image ${id}`;
        img.onerror = function() {
            this.onerror = null;
            this.src = 'https://via.placeholder.com/400x400?text=No+Image';
        };
        aboutImageDiv.appendChild(img);
    }

    const topLikedDiv = document.querySelector('.top-liked-images');
    if (topLikedDiv) {
        const ids = [
            Math.floor(Math.random() * 1000) + 1,
            Math.floor(Math.random() * 1000) + 1,
            Math.floor(Math.random() * 1000) + 1
        ];
        const ranks = ['2', '1', '3'];
        const classes = ['left', 'middle', 'right'];
        const prizes = ['1000$', '5000$', '2000$'];
        for (let i = 0; i < 3; i++) {
            const podiumStep = document.createElement('div');
            podiumStep.className = `podium-step ${classes[i]}`;
            const imageUrl = `https://picsum.photos/id/${ids[i]}/400/400`;
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `Top Liked Image ${ids[i]}`;
            img.onerror = function() {
                this.onerror = null;
                this.src = 'https://via.placeholder.com/400x400?text=No+Image';
            };
            if (i === 1) img.classList.add('middle');
            podiumStep.appendChild(img);
            const podiumBase = document.createElement('div');
            podiumBase.className = 'podium-base';
            const podiumRank = document.createElement('span');
            podiumRank.className = 'podium-rank';
            podiumRank.textContent = ranks[i];
            podiumBase.appendChild(podiumRank);
            const podiumCash = document.createElement('span');
            podiumCash.className = 'podium-cash';
            podiumCash.textContent = prizes[i];
            podiumBase.appendChild(podiumCash);
            podiumStep.appendChild(podiumBase);
            topLikedDiv.appendChild(podiumStep);
        }
    }

    const joinButton = document.querySelector('.join-button');
    if (joinButton) {
        joinButton.addEventListener('click', function() {
            document.querySelector('#register').classList.toggle('hidden');
        });
    }
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
        });
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('nav-open');
                }
            });
        });
    }
    const regForm = document.getElementById('register-form');
    const regName = document.getElementById('reg-name');
    const regEmail = document.getElementById('reg-email');
    const regPassword = document.getElementById('reg-password');
    const regError = document.getElementById('register-error');
    const togglePassword = document.getElementById('toggle-password');

    if (togglePassword && regPassword) {
        togglePassword.addEventListener('click', function() {
            if (regPassword.type === 'password') {
                regPassword.type = 'text';
                togglePassword.setAttribute('aria-label', 'Hide password');
                togglePassword.textContent = '🙈';
            } else {
                regPassword.type = 'password';
                togglePassword.setAttribute('aria-label', 'Show password');
                togglePassword.textContent = '👁️';
            }
        });
    }

    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            regError.style.display = 'none';
            regError.textContent = '';
            const name = regName.value.trim();
            const email = regEmail.value.trim();
            const password = regPassword.value;
            const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
            if (!name || !email || !password) {
                regError.textContent = 'All fields are required.';
                regError.style.display = 'block';
                return;
            }
            if (!emailRegex.test(email)) {
                regError.textContent = 'Please enter a valid email address.';
                regError.style.display = 'block';
                return;
            }
            if (password.length < 6) {
                regError.textContent = 'Password must be at least 6 characters.';
                regError.style.display = 'block';
                return;
            }
            alert('Registration successful!');
            regForm.reset();
            regPassword.type = 'password';
            togglePassword.textContent = '👁️';
        });
    }
    const scrollBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    const cookieBar = document.getElementById('cookie-notification');
    const acceptCookies = document.getElementById('accept-cookies');
    if (cookieBar && acceptCookies) {
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieBar.style.display = 'flex';
        }
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'yes');
            cookieBar.style.display = 'none';
        });
    }
});
