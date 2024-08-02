document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navWrapper = document.getElementById('header-nav-wrapper');

    burgerMenu.addEventListener('click', function() {
        navWrapper.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});
// const swiper = new Swiper('.swiper',{
//     direction: 'vertical',
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         preEl: '.swiper-button-prev',
//     }
// })