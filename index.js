
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        grabCursor: true,
        speed: 500,
        effect: 'slide',
        loop: true,
        mousewheel: {
            invert: false,
            sensitivity: 1,
        },
    });

    swiper.enable();
});
