document.querySelector('.button-menu-mobile').addEventListener('click', () => {
    if (document.querySelector('.menu-mobile').style.right == '0px') {
        document.querySelector('.menu-mobile').style.right = '-65vw'
        document.querySelector('.menu-mobile ul').style.opacity = 0
    } else {
        document.querySelector('.menu-mobile').style.right = '0px'
        document.querySelector('.menu-mobile ul').style.opacity = 1
    }
})

