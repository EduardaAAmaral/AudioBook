const botaoPlayPause = document.getElementById('play-pause');
const audiocapitulo = document.getElementById('audio-capitulo');
const botaoproximo = document.getElementById('proximo');
const botaovoltar = document.getElementById('anterior');
const nomecapitulo = document.getElementById('capitulo');
const menuMobile = document.getElementById('menu');
let imagem = document.getElementById('imagem');

let numerocapitulo = 10;
let taTocando = 0;
let capituloAtual = 1;
let nomedolivro = 'dom-casmurro' ;


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

    audiocapitulo.src = './books/' + nomedolivro +'/'+ capituloAtual + '.mp3';
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

    audiocapitulo.src = './books/' + nomedolivro +'/'+ capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarnomeFaixa();
}


function menuShow() {
    const computedStyle = window.getComputedStyle(menuMobile);
    const displayValue = computedStyle.getPropertyValue('display');

    if (displayValue === 'block') {
        menuMobile.style.display = 'none';
    } else {
        menuMobile.style.display = 'block';
    }
}

function dom() {
    nomedolivro = 'dom-casmurro';
    imagem.src = "./images/dom-casmurro.jpeg";
    capituloAtual = 1;
    trocarnomeFaixa();
    pausarFaixa();
    audiocapitulo.src = './books/' + nomedolivro + '/' + capituloAtual + '.mp3'; 
}

function poema() {
    nomedolivro = 'colecao-poemas';
    imagem.src = "./images/Colecao-Poemas.jpg";
    numerocapitulo = 20;
    capituloAtual = 1;
    trocarnomeFaixa();
    pausarFaixa();
    audiocapitulo.src = './books/' + nomedolivro + '/' + capituloAtual + '.mp3'; 
}

function Casa() {
    nomedolivro = 'casa-velha';
    imagem.src = "./images/casa_velha.jpg";
    numerocapitulo = 8;
    capituloAtual = 1;
    trocarnomeFaixa();
    pausarFaixa(); 
    audiocapitulo.src = './books/' + nomedolivro + '/' + capituloAtual + '.mp3'; 
}

function desencantos() {
    nomedolivro = 'desencantos';
    imagem.src = "./images/Desencantos.jpg";
    numerocapitulo = 2;
    capituloAtual = 1;
    trocarnomeFaixa();
    pausarFaixa(); 
    audiocapitulo.src = './books/' + nomedolivro + '/' + capituloAtual + '.mp3'; 
}

function helena() {
    nomedolivro = 'helena';
    imagem.src = "./images/helena.jpg";
    numerocapitulo = 28;
    capituloAtual = 1;
    trocarnomeFaixa();
    pausarFaixa(); 
    audiocapitulo.src = './books/' + nomedolivro + '/' + capituloAtual + '.mp3'; 
}

function quincas() {
    nomedolivro = 'Quincas-Borba';
    imagem.src = "./images/Quincas Borba.jpg";
    numerocapitulo = 15;
    capituloAtual = 1;
    trocarnomeFaixa();
    pausarFaixa(); 
    audiocapitulo.src = './books/' + nomedolivro + '/' + capituloAtual + '.mp3'; 
}

function alienista() {
    nomedolivro = 'o-alienista';
    imagem.src = "./images/alienista.jpg";
    numerocapitulo = 9;
    capituloAtual = 1;
    trocarnomeFaixa();
    pausarFaixa(); 
    audiocapitulo.src = './books/' + nomedolivro + '/' + capituloAtual + '.mp3'; 
}

function mao(){
    nomedolivro = 'a-mao-e-a-luva';
    imagem.src = "./images/mao_luva.jpg";
    numerocapitulo = 19;
    capituloAtual = 0;
    trocarnomeFaixa();
    pausarFaixa(); 
    audiocapitulo.src = './books/' + nomedolivro + '/' + capituloAtual + '.mp3'; 
}



botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoproximo.addEventListener('click', proximaFaixa);
botaovoltar.addEventListener('click', VoltarFaixa)