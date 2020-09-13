window.addEventListener('scroll', () => {
    if (pageYOffset > 150) {
        nav.classList.remove('bg-trans');
        nav.classList.add('bg-theme');
    } else {
        nav.classList.remove('bg-theme');
        nav.classList.add('bg-trans');
    }
})


window.addEventListener('scroll', () => {
    let btn = document.getElementById('btnUp');

    if (pageYOffset > 1395) {
        btn.hidden = false;
    } else if (pageYOffset < 1395) {
        btn.hidden = true;
    }

})

function upTop() {
    console.log('uptop');
    window.scrollTo(pageXOffset, 0);
}