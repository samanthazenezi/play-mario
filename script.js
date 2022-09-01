//COMEÇAR O JOGO
function modalIniciar(){
    return iniciar()
}
function iniciar(){
    document.querySelector("#game").classList.toggle("jogo");
}

//JOGO
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1000)
}

function jogo(){
    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
            pipe.style.animation = 'stop';
            pipe.style.left = 120;
    
            mario.style.animation = 'none';
            mario.style.left = 80;
            mario.src = './assets/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
    
            return modalReiniciar();
    
            clearInterval(loop)
        }
    }, 10);
}


function modalReiniciar(){
    document.querySelector("#modal-reiniciar").classList.toggle("visivel");
}

function reiniciar(){
    location.reload();
}






document.addEventListener('keydown', jump);