let data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
switch (mes) {
    case 0:
        mes = 'Janeiro'
    break;
    case 1:
        mes = 'Fevereiro'
    break;
    case 2:
        mes = 'Março'
    break;
    case 3:
        mes = 'Abril'
    break;
    case 4:
        mes = 'Maio'
    break;
    case 5:
        mes = 'Junho'
    break;
    case 6:
        mes = 'Julho'
    break;
    case 7:
        mes = 'Agosto'
    break;
    case 8:
        mes = 'Setembro'
    break;
    case 9:
        mes = 'Outubro'
    break;
    case 10:
        mes = 'Novembro'
    break;
    case 11:
        mes = 'Dezembro'
    break;              
}
let ano = data.getUTCFullYear()

document.querySelector('.dia').innerHTML = dia
document.querySelector('.mes').innerHTML = mes
document.querySelector('.ano').innerHTML = ano

document.querySelector('.section-8 .perguntas .title1').addEventListener('click', () => {
    if (document.querySelector('.p1').style.display == 'block') {
        document.querySelector('.p1').style.display = 'none'
        document.querySelector('.icon-1').classList.remove('fa-angle-down')
        document.querySelector('.icon-1').classList.add('fa-angle-right')
    } else {
        document.querySelector('.p1').style.display = 'block'
        document.querySelector('.icon-1').classList.remove('fa-angle-right')
        document.querySelector('.icon-1').classList.add('fa-angle-down')
    }
})

document.querySelector('.section-8 .perguntas .title2').addEventListener('click', () => {
    if (document.querySelector('.p2').style.display == 'block') {
        document.querySelector('.p2').style.display = 'none'
        document.querySelector('.icon-2').classList.remove('fa-angle-down')
        document.querySelector('.icon-2').classList.add('fa-angle-right')
    } else {
        document.querySelector('.p2').style.display = 'block'
        document.querySelector('.icon-2').classList.remove('fa-angle-right')
        document.querySelector('.icon-2').classList.add('fa-angle-down')
    }
})

document.querySelector('.section-8 .perguntas .title3').addEventListener('click', () => {
    if (document.querySelector('.p3').style.display == 'block') {
        document.querySelector('.p3').style.display = 'none'
        document.querySelector('.icon-3').classList.remove('fa-angle-down')
        document.querySelector('.icon-3').classList.add('fa-angle-right')
    } else {
        document.querySelector('.p3').style.display = 'block'
        document.querySelector('.icon-3').classList.remove('fa-angle-right')
        document.querySelector('.icon-3').classList.add('fa-angle-down')
    }
})

document.querySelector('.section-8 .perguntas .title4').addEventListener('click', () => {
    if (document.querySelector('.p4').style.display == 'block') {
        document.querySelector('.p4').style.display = 'none'
        document.querySelector('.icon-4').classList.remove('fa-angle-down')
        document.querySelector('.icon-4').classList.add('fa-angle-right')
    } else {
        document.querySelector('.p4').style.display = 'block'
        document.querySelector('.icon-4').classList.remove('fa-angle-right')
        document.querySelector('.icon-4').classList.add('fa-angle-down')
    }
})

document.querySelector('.section-8 .perguntas .title5').addEventListener('click', () => {
    if (document.querySelector('.p5').style.display == 'block') {
        document.querySelector('.p5').style.display = 'none'
        document.querySelector('.icon-5').classList.remove('fa-angle-down')
        document.querySelector('.icon-5').classList.add('fa-angle-right')
    } else {
        document.querySelector('.p5').style.display = 'block'
        document.querySelector('.icon-5').classList.remove('fa-angle-right')
        document.querySelector('.icon-5').classList.add('fa-angle-down')
    }
})

document.querySelector('.section-8 .perguntas .title6').addEventListener('click', () => {
    if (document.querySelector('.p6').style.display == 'block') {
        document.querySelector('.p6').style.display = 'none'
        document.querySelector('.icon-6').classList.remove('fa-angle-down')
        document.querySelector('.icon-6').classList.add('fa-angle-right')
    } else {
        document.querySelector('.p6').style.display = 'block'
        document.querySelector('.icon-6').classList.remove('fa-angle-right')
        document.querySelector('.icon-6').classList.add('fa-angle-down')
    }
})
