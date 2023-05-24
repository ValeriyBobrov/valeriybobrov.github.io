import './index.html';
import './index.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let init = false;

function swiperCard() {
    if (window.innerWidth <= 768) {
        init = true;
        const swiper1 = new Swiper('.swiper-brends', {
            pagination: {
                el: '.swiper-pagination-brends',
            },
            slidesPerView: 1.4,
            spaceBetween: 16,
        });
        
        const swiper2 = new Swiper('.swiper-technic', {
            pagination: {
                el: '.swiper-pagination-technic',
            },
            slidesPerView: 1.4,
            spaceBetween: 16,
        });
        
        const swiper3 = new Swiper('.swiper-price', {
            pagination: {
                el: '.swiper-pagination-price',
            },
            slidesPerView: 1.4,
            spaceBetween: 16,
        });
    } else if (init) {
        swiper1.destroy();
        swiper2.destroy();
        swiper3.destroy();
        init = false;
    }
}

swiperCard();
window.addEventListener('resize', swiperCard);

let btnTechnic = document.querySelector('.technic__btn')

let toggleListTechnic = function() {
    let hideListTechnic = document.querySelectorAll('.swiper-slide-technic--hidden');

    for (let i = 0; i < hideListTechnic.length; i++) {
        let element = hideListTechnic[i];

        if (element.style.display === 'none') {
            element.style.display = 'block';
            element.classList.add('swiper-slide-technic');
            btnTechnic.textContent = 'Скрыть';
            btnTechnic.classList.add('technic__btn--rotate');
        } else {
            element.style.display = 'none';
            btnTechnic.textContent = 'Показать все';
            btnTechnic.classList.remove('technic__btn--rotate');
        }

    }
}

btnTechnic.addEventListener('click', function() {
    toggleListTechnic();
});

let btnBrends = document.querySelector('.brends__btn')

let toggleListBrends = function() {
    let hideListBrends = document.querySelectorAll('.swiper-slide-brends--hidden');
    console.log(hideListBrends);
    for (let i = 0; i < hideListBrends.length; i++) {
        let element = hideListBrends[i];

        if (element.style.display === 'none') {
            element.style.display = 'block';
            element.classList.add('swiper-slide-brends');
            btnBrends.textContent = 'Скрыть';
            btnBrends.classList.add('brends__btn--rotate');
        } else {
            element.style.display = 'none';
            btnBrends.textContent = 'Показать все';
            btnBrends.classList.remove('brends__btn--rotate');
        }
    }
}

btnBrends.addEventListener('click', function() {
    toggleListBrends();
});

let burgerOpen = document.querySelector('.header-list__burger');
let aside = document.querySelector('.aside');
let burgerClose = document.querySelector('.aside-header__close');

burgerOpen.addEventListener('click', function() {
    aside.classList.add('aside-open');
});

burgerClose.addEventListener('click', function() {
    aside.classList.remove('aside-open');
});
