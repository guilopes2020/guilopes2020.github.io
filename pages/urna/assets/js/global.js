let clickSound = new Audio('assets/audio/click.mp3');
let confirmaSound = new Audio('assets/audio/confirma.mp3');
let confirmaFimSound = new Audio('assets/audio/confirmaFim.mp3');

let botoes = document.querySelectorAll('.teclado ul');
let desc = document.querySelector('.desc span');
let cargo = document.querySelector('.cargo');
let numeros = document.querySelector('.numeros ul');
let info = document.querySelector('.info');
let instrucoes = document.querySelector('.instrucoes');
let fotos = document.querySelector('.display-dir');
let etapaAtual = 0;
let numero = '';
let branco = true;

function montarTabelas() {
    let tabelas = document.querySelector('.lista-candidatos');
    tabelaHtml = '';

    for (let i in etapas) {
        tabelaHtml += '<table>';
        tabelaHtml += '<thead>';
        tabelaHtml += `<tr><th colspan="3" class="cab-cargo">${etapas[i].titulo}</th></tr>`;
        tabelaHtml += '<tr><th>Número</th><th>Nome</th><th>Partido</th></tr>';
        tabelaHtml += '</thead>';
        tabelaHtml += '<tbody>';
        for (let j in etapas[i].candidatos) {
            tabelaHtml += `<tr><td>${etapas[i].candidatos[j].numero}</td><td>${etapas[i].candidatos[j].nome}</td><td>${etapas[i].candidatos[j].partido}</td></tr>`;
        }
        tabelaHtml += '</tbody>';
        tabelaHtml += '</table>';
    }

    tabelas.innerHTML = tabelaHtml;
}

function carregarEtapa() {
    branco = false;
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    
    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<li class="pisca"></li>'
        } else {
            numeroHtml += '<li></li>'
        }
    }

    desc.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    info.innerHTML = '';
    instrucoes.style.display = 'none';
    fotos.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizarInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter(item => {
        return item.numero === parseInt(numero);
    });

    if (candidato.length > 0) {
        let fotosHTML = '';

        candidato = candidato[0];
        desc.style.display = 'block';
        instrucoes.style.display = 'block';
        info.innerHTML = `Nome: ${candidato.nome}<br>`;
        info.innerHTML += `Partido: ${candidato.partido}<br>`;
        if (candidato.vice) {
            info.innerHTML += `${candidato.viceTitulo}: ${candidato.vice}<br>`;
        }

        for (let i in candidato.fotos) {
            fotosHTML += `<div class="candidato${candidato.fotos[i].small? ' small' : ''}">`;
            fotosHTML += `<img src="assets/images/${candidato.fotos[i].url}" alt="candidato">`;
            fotosHTML += `<span>${candidato.fotos[i].legenda}</span>`;
            fotosHTML += '</div>';
        }

        fotos.innerHTML = fotosHTML;
    } else {
        desc.style.display = 'block';
        instrucoes.style.display = 'block';
        info.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>'
    }
}

function inserirDigito(digito) {
    let cursor = numeros.querySelector('.pisca');

    if (cursor) {
        numero += digito;
        cursor.innerHTML = digito;
        cursor.classList.remove('pisca');
        
        if (cursor.nextElementSibling) {
            cursor.nextElementSibling.classList.add('pisca');
        } else {
            atualizarInterface();
        }
    }
}

function anularVoto() {
    if (!numero) {
        branco = true;
        desc.style.display = 'block';
        instrucoes.style.display = 'block';
        numeros.innerHTML = '';
        fotos.innerHTML = '';
        info.innerHTML = '<div class="aviso-grande pisca">VOTO EM BRANCO</div>';
    }
}

function reiniciarCampo() {
    numero = '';

    carregarEtapa();
}

function confirmarVoto() {
    let etapa = etapas[etapaAtual];
    let confirmado = false;

    if (branco) {
        confirmado = true;
    } else if (numero.length === etapa.numeros) {
        confirmado = true;
    }

    if (confirmado) {
        etapaAtual++;

        if (etapas[etapaAtual]) {
            confirmaSound.play();
            numero = '';
            carregarEtapa();
        } else {
            confirmaFimSound.play();
            document.querySelector('.tela').innerHTML = '<div class="aviso-gigante">FIM</div>';
            setTimeout(() => {
                location.reload();
            }, 5000);
        }
    }
}

//  listener de botões
botoes.forEach(item => {
    item.querySelectorAll('li').forEach(el => {
        el.addEventListener('click', e => {
            clickSound.currentTime = 0;
            clickSound.play();

            switch (e.target.innerHTML) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    inserirDigito(e.target.innerHTML);
                    break;
                case 'BRANCO':
                    anularVoto();
                    break;
                case 'CORRIGE':
                    reiniciarCampo();
                    break;
                case 'CONFIRMA':
                    confirmarVoto();
                    break;
            }
        });
    });
});

montarTabelas();
carregarEtapa();
