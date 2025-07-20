// Loader
window.addEventListener('load', function() {
    document.getElementById('loader').classList.add('hide');
    setTimeout(() => document.getElementById('loader').remove(), 600);
});

// Navbar blur on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Back to top button
window.addEventListener('scroll', function () {
    document.getElementById('backToTop').style.display = window.scrollY > 200 ? 'block' : 'none';
});
document.getElementById('backToTop').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Promo popup
setTimeout(function () {
    document.getElementById('promoPopup').style.display = 'block';
}, 2500);

// Dark mode toggle
document.getElementById('toggleDark').onclick = function () {
    document.body.classList.toggle('dark-mode');
};

// Toast promo on submit
document.querySelector('#promo form').onsubmit = function(e) {
    e.preventDefault();
    const toast = new bootstrap.Toast(document.getElementById('promoToast'));
    toast.show();
    this.reset();
};