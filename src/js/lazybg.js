document.addEventListener("DOMContentLoaded", function () {
    let lazyBgItem = document.querySelectorAll('.lazybg');
    if (lazyBgItem) {
        lazyBgItem.forEach((e) => {
            let backgroundUrl = e.dataset.lazybg;
            e.style.backgroundImage = 'url(' + backgroundUrl + ')';
        });
    } 
});