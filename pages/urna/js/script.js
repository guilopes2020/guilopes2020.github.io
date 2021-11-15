let seuVotoPara = document.querySelector('.voto-para')
let cargo = document.querySelector('.tipo-candit')
let descricao = document.querySelector('.descr-candit')
let aviso = document.querySelector('.div2')
let lateral = document.querySelector('.div1--right')
let numeros = document.querySelector('.dig-candit')

let etapaAtual = 0
let numero = ''
let votBranco = true
let votos = []

function comecarEtapa() {
    let etapa = etapas[etapaAtual]

    let numeroHtml = ''
    numero = ''
    votBranco = false

    for(let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>'
        } else {
            numeroHtml += '<div class="numero"></div>'
        }
        
    }

    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero == numero) {
            return true
        } else {
            return false
        }
    })
    if (candidato.length > 0) {
        candidato = candidato[0]
        aviso.style.display = 'flex'
        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`
        let fotosHtml = ''
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="d-1-image">
            <img src="images/${candidato.fotos[i].url}" alt="">
            <span>${candidato.fotos[i].legenda}</span>
        </div>`
        }
        lateral.innerHTML = fotosHtml
    } else {
        aviso.style.display = 'flex'
        descricao.innerHTML = 'VOTO NULO'
        descricao.style.fontSize = '50px'
        descricao.classList.add('pisca')
    }
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca')
    if (elNumero !== null) {
        elNumero.innerHTML = n
        numero = `${numero}${n}`
        elNumero.classList.remove('pisca')
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface()
        }
        
    }
}

function branco() {
    if (numero == '') {
        votBranco = true
        numeros.innerHTML = ''
        aviso.style.display = 'flex'
        descricao.innerHTML = 'VOTO EM BRANCO'
        descricao.style.fontSize = '40px'
        descricao.classList.add('pisca')
    }
}

function corrige() {
    comecarEtapa()
}

function confirma() {
    let etapa = etapas[etapaAtual]
    let votoConfirmado = false

    if (votBranco === true) {
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        })
        console.log('confirmando voto em branco')
    } else if(numero.length === etapa.numeros) {
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        })
    }

    if (votoConfirmado) {
        etapaAtual++
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa()
        } else {
            console.log(votos)
            document.querySelector('.tela').innerHTML = 'FIM'
            document.querySelector('.tela').style.fontSize = '80px'
            document.querySelector('.tela').style.display = 'flex'
            document.querySelector('.tela').style.alignItens = 'center'
            document.querySelector('.tela').style.textAlign = 'center'
            document.querySelector('.tela').classList.add('pisca')
        }
    }
}


comecarEtapa()