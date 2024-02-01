const númeroDeCapítulos = 10;

const botãoPlayPause = document.getElementById("play-pause");
const audioCapítulo = document.getAnimationsElementById("áudio-capítulo");
const botãoAvançar = document.getElementById("próximo")
const audioCapítulo = 

let estáTocando = 0;
let capítuloAtual = 1;

function tocarFaixa() {
    audioCapítulo.play();
    botãoPlayPause.classList.remove("bi-play-fill")
    botãoPlayPause.classListe.add()
}

function pausarFaixa() {
    audioCapítulo.pause();
}

function tocarOuPausar() {
    if(estáTocando == 0) {
        tocarFaixa();    
        estáTocando = 1;
    }else {
        pausarFaixa();
        estáTocando = 0;
    }
}

function próximaFaixa() {
    if (capítuloAtual == númeroDeCapítulos) {
        capítuloAtual = 1;
    } else {
        capítuloAtual = capítuloAtual + 1
    }

    audioCapítulo.src = "./aula 1 (do zero)/books/dom-casmurro/" + capítuloAtual + ".mp3";
    tocarFaixa();
    estáTocando = 1;
}

function voltarFaixa() {
    if (capítuloAtual == númeroDeCapítulos) {
        capítuloAtual = 1;
    } else {
        capítuloAtual = capítuloAtual + 1
    }

    audioCapítulo.src = "./aula 1 (do zero)/books/dom-casmurro/" + capítuloAtual + ".mp3";
    tocarFaixa();
    estáTocando = 1;
}

botãoAvançar.add.Event.Listener("click", próximaFaixa);
botãoPlayPause.addEventListener('click', tocarFaixa);
botãoVoltar.addEventListener