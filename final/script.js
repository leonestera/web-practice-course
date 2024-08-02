document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger_menu');
    const navWrapper = document.getElementById('header_nav_wrapper');

    burgerMenu.addEventListener('click', function() {
        navWrapper.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new swiper('.swiper-container', {
        slidesPerView: 1,
        slidesBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clicable: true,
        },
        navigation: {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-buttom-prev',
        }
        breakpoints: {
            768: {
                slidesPerView: 3,
                slidesBetween: 20,
            }
        }
    });
});