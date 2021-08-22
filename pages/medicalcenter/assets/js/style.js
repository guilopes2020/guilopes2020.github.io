function active(num) {
    document.querySelector('.act-li')
    switch (num) {
        case '1':
            document.querySelector('.act-li-1').classList.add('active')
            document.querySelector('.act-li-2').classList.remove('active')
            document.querySelector('.act-li-3').classList.remove('active')
            document.querySelector('.act-li-4').classList.remove('active')
            document.querySelector('.act-li-5').classList.remove('active')
            document.querySelector('.act-li-6').classList.remove('active')
            document.querySelector('.act-li-7').classList.remove('active')
            break

        case '2':
            document.querySelector('.act-li-1').classList.remove('active')
            document.querySelector('.act-li-2').classList.add('active')
            document.querySelector('.act-li-3').classList.remove('active')
            document.querySelector('.act-li-4').classList.remove('active')
            document.querySelector('.act-li-5').classList.remove('active')
            document.querySelector('.act-li-6').classList.remove('active')
            document.querySelector('.act-li-7').classList.remove('active')    
            break

        case '3':
            document.querySelector('.act-li-1').classList.remove('active')
            document.querySelector('.act-li-2').classList.remove('active')
            document.querySelector('.act-li-3').classList.add('active')
            document.querySelector('.act-li-4').classList.remove('active')
            document.querySelector('.act-li-5').classList.remove('active')
            document.querySelector('.act-li-6').classList.remove('active')
            document.querySelector('.act-li-7').classList.remove('active')
            break

        case '4':
            document.querySelector('.act-li-1').classList.remove('active')
            document.querySelector('.act-li-2').classList.remove('active')
            document.querySelector('.act-li-3').classList.remove('active')
            document.querySelector('.act-li-4').classList.add('active')
            document.querySelector('.act-li-5').classList.remove('active')
            document.querySelector('.act-li-6').classList.remove('active')
            document.querySelector('.act-li-7').classList.remove('active')
            break

        case '5':
            document.querySelector('.act-li-1').classList.remove('active')
            document.querySelector('.act-li-2').classList.remove('active')
            document.querySelector('.act-li-3').classList.remove('active')
            document.querySelector('.act-li-4').classList.remove('active')
            document.querySelector('.act-li-5').classList.add('active')
            document.querySelector('.act-li-6').classList.remove('active')
            document.querySelector('.act-li-7').classList.remove('active')
            break

        case '6':
            document.querySelector('.act-li-1').classList.remove('active')
            document.querySelector('.act-li-2').classList.remove('active')
            document.querySelector('.act-li-3').classList.remove('active')
            document.querySelector('.act-li-4').classList.remove('active')
            document.querySelector('.act-li-5').classList.remove('active')
            document.querySelector('.act-li-6').classList.add('active')
            document.querySelector('.act-li-7').classList.remove('active')
            break

        case '7':
                document.querySelector('.act-li-1').classList.remove('active')
                document.querySelector('.act-li-2').classList.remove('active')
                document.querySelector('.act-li-3').classList.remove('active')
                document.querySelector('.act-li-4').classList.remove('active')
                document.querySelector('.act-li-5').classList.remove('active')
                document.querySelector('.act-li-6').classList.remove('active')
                document.querySelector('.act-li-7').classList.add('active')                
            break;
    }
    
}

/*function menuMobile() {
    let menu = document.querySelector('.container-banner nav')
    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}*/

    document.querySelector('.menu-mobile').addEventListener('click', function () {
    if (document.querySelector('.container-banner nav').style.display == 'flex') {
        document.querySelector('.container-banner nav').style.display = 'none'
    } else {
        document.querySelector('.container-banner nav').style.display = 'flex'
    }
})