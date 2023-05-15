new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: false
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
});

let btnClose = document.querySelector('.buttonClose');

let toggleList = function () {
    let divList = document.querySelectorAll('.list-service__item--hidden');
    for (let i = 0; i < divList.length; i++) {
        let element = divList[i];
        if (element.style.display === 'none') {
            element.style.display = 'inherit';
            btnClose.textContent = 'Скрыть'
        } else {
            element.style.display = 'none';
            btnClose.textContent = 'Показать все';
        }
    }
}

btnClose.addEventListener('click', function () {
    toggleList();
});