let mobileMenuButton = document.querySelector('.mobile__menu__button span i');
let mobileMenu = document.querySelector('.mobile__menu');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.remove('hidden');
    });
    
    mobileMenu.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
    });
}
