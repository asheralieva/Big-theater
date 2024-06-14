document.addEventListener("DOMContentLoaded", () => {
    const gaz_wrapper = document.querySelector(".gaz_wrapper");
    let isDragging = false;
    let startX;
    let scrollLeft;

    gaz_wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        gaz_wrapper.classList.add('dragging');
        startX = e.pageX - gaz_wrapper.offsetLeft;
        scrollLeft = gaz_wrapper.scrollLeft;
        e.preventDefault(); // Предотвращение перетаскивания изображения
    });

    gaz_wrapper.addEventListener('touchstart', (e) => {
        isDragging = true;
        gaz_wrapper.classList.add('dragging');
        startX = e.touches[0].pageX - gaz_wrapper.offsetLeft;
        scrollLeft = gaz_wrapper.scrollLeft;
        e.preventDefault(); // Предотвращение перетаскивания изображения
    });

    gaz_wrapper.addEventListener('mouseleave', () => {
        isDragging = false;
        gaz_wrapper.classList.remove('dragging');
    });

    gaz_wrapper.addEventListener('mouseup', () => {
        isDragging = false;
        gaz_wrapper.classList.remove('dragging');
    });

    gaz_wrapper.addEventListener('touchend', () => {
        isDragging = false;
        gaz_wrapper.classList.remove('dragging');
    });

    gaz_wrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - gaz_wrapper.offsetLeft;
        const walk = (x - startX) * 3; // Умножение для ускорения прокрутки
        gaz_wrapper.scrollLeft = scrollLeft - walk;
    });

    gaz_wrapper.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - gaz_wrapper.offsetLeft;
        const walk = (x - startX) * 3; // Умножение для ускорения прокрутки
        gaz_wrapper.scrollLeft = scrollLeft - walk;
    });

    // Предотвращение выделения текста при перетаскивании
    gaz_wrapper.addEventListener('dragstart', (e) => e.preventDefault());
});
