var swiper = new Swiper('.swiper-container__mobile', {

    slidesPerView: 'auto',
    autoHeight: false,
    centeredSlides: false,
    spaceBetween: 10,
    centeredSlides: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    scrollbar: {
        hide: true
    },

    breakpoints: {
        320: {
            slidesPerView: 1.25
        }
    }
});

const btn = document.querySelector('.btn');
const hiddenItems = document.querySelectorAll('.hidden-item');

btn.addEventListener('click', function () {

    if (btn.textContent === 'Показать все') {

        hiddenItems.forEach(function (item) {
            item.style.display = 'block';
        });

        btn.textContent = 'Скрыть';

    } else {

        hiddenItems.forEach(function (item) {
            item.style.display = 'none';
        });

        btn.textContent = 'Показать все';
    }

});

const img = document.getElementById('img');
let rotated = false;

btn.addEventListener('click', function () {
    if (!rotated) {
        img.style.transform = 'rotate(180deg)';
    } else {
        img.style.transform = 'rotate(0deg)';
    }

    rotated = !rotated;
});