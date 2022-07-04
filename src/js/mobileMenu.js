const menuButton = document.querySelector('.js--mobile-menu-button');
const mobileMenuBackdrop = document.querySelector('.js--mobile-menu-backdrop');
const mobileMenuLinks = Array.from(document.querySelectorAll('.js--mobile-menu-link'));

menuButton.addEventListener('click', () => {
    mobileMenuBackdrop.classList.add('active');
});

mobileMenuBackdrop.addEventListener('click', (evt) => {
    if (!evt.target.closest('.js--mobile-menu')) {
        mobileMenuBackdrop.classList.remove('active');
    }
})

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBackdrop.classList.remove('active');
    });
})