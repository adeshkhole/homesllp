// ========================
// Sonali Homes LLP Script
// ========================

// ---------- Banner Slideshow (optional) ----------

const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

if (slides.length > 0) {
    function nextSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        updateDots();
    }

    function addSlideControls() {
        const controls = document.createElement('div');
        controls.classList.add('slide-controls');
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                slides[currentSlide].classList.remove('active');
                currentSlide = index;
                slides[currentSlide].classList.add('active');
                updateDots();
            });
            controls.appendChild(dot);
        });
        document.querySelector('.hero').appendChild(controls);
        updateDots();
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.style.background = index === currentSlide ? '#D4AF37' : '#666';
        });
    }

    addSlideControls();
    setInterval(nextSlide, 3000);
}

// ---------- Popup (Smooth + Centered) ----------
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");
    const ctaBtn = document.querySelector(".cta-btn"); // Button on homepage

    // Auto show popup after 3 seconds only on Home Page
    if ((window.location.pathname.includes("index.html") || window.location.pathname === "/") && popup) {
        setTimeout(() => {
            popup.style.display = "flex"; // show in center
        }, 3000);
    }

    // Open popup manually (optional)
    if (ctaBtn && popup) {
        ctaBtn.addEventListener("click", (e) => {
            e.preventDefault();
            popup.style.display = "flex";
            popup.querySelector("input").focus();
        });
    }

    // Open popup with left Enquire Now button
    const enquireNowBtn = document.querySelector(".enquire-now-btn");
    if (enquireNowBtn && popup) {
        enquireNowBtn.addEventListener("click", (e) => {
            e.preventDefault();
            popup.style.display = "flex";
            popup.querySelector("input").focus();
        });
    }

    // Close popup (✖ button)
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    // Close popup when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
});

// ---------- Inquiry Form (Popup) ----------
document.getElementById('inquiry-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.querySelector('.popup-content form');
    const input = form.querySelector("input");
    const textarea = form.querySelector("textarea");
    // Here you can add code to send the form data to your server if needed

    // Show thank you message
    const thanksMsg = document.querySelector('.thanks-msg');
    if (form && thanksMsg) {
        form.style.display = 'none';
        thanksMsg.style.display = 'block';
        input.value = "";
        textarea.value = "";
        setTimeout(() => alert('Thank you! We will contact you soon.'), 100);
    }
});

// ---------- Contact Page Form ----------
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Inquiry sent! Thank you.');
});

// ---------- Navbar Scroll Effect ----------
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ---------- Mobile Menu ----------
document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');

    if (navContainer && navMenu && !document.querySelector('.hamburger')) {
        const hamburger = document.createElement('div');
        hamburger.classList.add('hamburger');
        hamburger.innerHTML = '☰';
        navContainer.appendChild(hamburger);

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when link clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});

// ---------- Scroll Animations ----------
function handleAnimations() {
    const elements = document.querySelectorAll('[data-animation]');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleAnimations);
document.addEventListener('DOMContentLoaded', handleAnimations);

// ---------- Dark Mode Toggle ----------
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load previous mode from local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "🌞";
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "🌞";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
});

// ---------- Location Benefits Click Handler ----------
document.addEventListener('DOMContentLoaded', () => {
    const locationItems = document.querySelectorAll('.location-item');
    locationItems.forEach(item => {
        item.addEventListener('click', () => {
            const type = item.getAttribute('data-type');
            const subList = item.querySelector('.sub-list');
            if (subList) {
                subList.classList.toggle('hidden');
                subList.classList.toggle('show');
            }
            // Hide other sub-lists
            locationItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherSubList = otherItem.querySelector('.sub-list');
                    if (otherSubList) {
                        otherSubList.classList.add('hidden');
                        otherSubList.classList.remove('show');
                    }
                }
            });
        });
    });
});

// --------------------------------------------------------------------------
// End of js/script.js
// --------------------------------------------------------------------------