let init = false;

function swiperCard() {
    if (window.innerWidth <= 768) {
        init = true;
        swiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: false
            },
            slidesPerView: 'auto',
            spaceBetween: 16,
        });
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

swiperCard();
window.addEventListener('resize', swiperCard);

let btnClose = document.querySelector('.buttonClose');



let toggleList = function () {
    let divList = document.querySelectorAll('.swiper-slide--hidden');

    for (let i = 0; i < divList.length; i++) {
        let element = divList[i];
        if (element.style.display === 'none') {
            element.style.display = 'block';
            element.classList.add('swiper-slide');
            btnClose.textContent = 'Скрыть';
            btnClose.classList.add('buttonCloseRotate');
        } else {
            element.style.display = 'none';
            btnClose.textContent = 'Показать все';
            btnClose.classList.remove('buttonCloseRotate');
        }
    }
}

btnClose.addEventListener('click', function () {
    toggleList();
});