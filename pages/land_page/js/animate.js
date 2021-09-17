/*function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (el) {
        if ((windowTop) > el.offsetTop) {
            //adiciona animaÃ§Ã£o
            el.classList.add('animate');

        } else {
            el.classList.remove('animate');
        }
    })
}

animeScroll();
if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 200))
}*/