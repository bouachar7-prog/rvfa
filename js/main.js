const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuBtn?.querySelector('i');
const contactForm = document.getElementById('contact-form');

function setMobileMenuOpen(open) {
    if (!mobileMenu || !menuIcon) return;

    mobileMenu.classList.toggle('hidden', !open);
    menuIcon.classList.toggle('fa-bars', !open);
    menuIcon.classList.toggle('fa-times', open);
    document.body.classList.toggle('menu-open', open);
    mobileMenuBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileMenuBtn?.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-[#1e3a5f]/95', 'backdrop-blur-lg', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-[#1e3a5f]/95', 'backdrop-blur-lg', 'shadow-lg');
            navbar.classList.add('bg-transparent');
        }
    });
}

mobileMenuBtn?.addEventListener('click', () => {
    setMobileMenuOpen(mobileMenu.classList.contains('hidden'));
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const offset = navbar?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: 'smooth' });
        setMobileMenuOpen(false);
    });
});

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    contactForm.reset();
});
