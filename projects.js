document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Mouse events
    swiperWrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        swiperWrapper.classList.add('dragging');
        startX = e.pageX - swiperWrapper.offsetLeft;
        scrollLeft = swiperWrapper.scrollLeft;
        e.preventDefault(); // Предотвращение перетаскивания изображения
    });

    swiperWrapper.addEventListener('mouseleave', () => {
        isDragging = false;
        swiperWrapper.classList.remove('dragging');
    });

    swiperWrapper.addEventListener('mouseup', () => {
        isDragging = false;
        swiperWrapper.classList.remove('dragging');
    });

    swiperWrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - swiperWrapper.offsetLeft;
        const walk = (x - startX) * 3; // Умножение для ускорения прокрутки
        swiperWrapper.scrollLeft = scrollLeft - walk;
    });

    // Touch events
    swiperWrapper.addEventListener('touchstart', (e) => {
        isDragging = true;
        swiperWrapper.classList.add('dragging');
        startX = e.touches[0].pageX - swiperWrapper.offsetLeft;
        scrollLeft = swiperWrapper.scrollLeft;
        e.preventDefault();
    });

    swiperWrapper.addEventListener('touchend', () => {
        isDragging = false;
        swiperWrapper.classList.remove('dragging');
    });

    swiperWrapper.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - swiperWrapper.offsetLeft;
        const walk = (x - startX) * 3; // Умножение для ускорения прокрутки
        swiperWrapper.scrollLeft = scrollLeft - walk;
    });

    // Предотвращение выделения текста при перетаскивании
    swiperWrapper.addEventListener('dragstart', (e) => e.preventDefault());
});
