const botaoPlayPause = document.getElementById('play-pause');
const audiocapitulo = document.getElementById('audio-capitulo');
const botaoproximo = document.getElementById('proximo');
const botaovoltar = document.getElementById('anterior');
const nomecapitulo = document.getElementById('capitulo')

const numerocapitulo = 10;
let taTocando = 0;
let capituloAtual = 1;


function tocarFaixa() {
    audiocapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audiocapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar(){
    if (taTocando === 0 ) {
        tocarFaixa();
        taTocando = 1;
    } else{
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarnomeFaixa(){
    nomecapitulo.innerText = 'Capítulo ' + capituloAtual
}

function proximaFaixa(){
    if (capituloAtual === numerocapitulo){
        capituloAtual = 1;
    } else{
        capituloAtual += 1
    }

    audiocapitulo.src = './books/dom-casmurro/'+ capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarnomeFaixa();
}


function VoltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numerocapitulo;
    } else{
        capituloAtual -= 1
    }

    audiocapitulo.src = './books/dom-casmurro/'+ capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarnomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoproximo.addEventListener('click', proximaFaixa);
botaovoltar.addEventListener('click', VoltarFaixa)