// Toggle Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};

// Debounce Function for Performance Improvement
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Active Link State on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', debounce(() => {
    let scrollY = window.scrollY;
    sections.forEach(section => {
        let sectionHeight = section.offsetHeight;
        let sectionTop = section.offsetTop - 150;
        let id = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}, 20));

// Sticky Header
let header = document.querySelector('header');

window.addEventListener('scroll', debounce(() => {
    header.classList.toggle('sticky', window.scrollY > 100);
}, 20));

// Remove Menu on Link Click
navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
    };
});

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js Initialization
const typed = new Typed('.multiple-text', {
    strings: ['a Software Developer', 'a Fullstack Developer', 'an Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
