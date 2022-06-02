document.addEventListener("DOMContentLoaded", function () {
    const cubic = document.querySelectorAll('.cubic');
    if (cubic) {
        cubic.forEach((e) => {
            console.log(e.offsetWidth);
            e.style.height = e.offsetWidth + 'px';
            console.log(e.offsetHeight);
        });

        window.addEventListener('resize', function () {
            cubic.forEach((e) => {
                console.log(e.offsetWidth);
                e.style.height = e.offsetWidth + 'px';
                console.log(e.offsetHeight);
            });
        });
    }
});
