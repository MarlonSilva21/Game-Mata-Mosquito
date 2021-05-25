let largura = 0
let altura = 0
let vidas = 3
let tempo = 60
let pontosDeJogo = 0

let criaMosquitoTempo = 1500

//Painel de niveis

niveis = window.location.search
niveis = niveis.replace('?', '')
if (niveis === 'facil'){
    criaMosquitoTempo = 2000

}else if (niveis === 'normal'){
    criaMosquitoTempo = 1500

}else if(niveis === 'dificil') {
    criaMosquitoTempo = 1000
}
else if (niveis === 'valendo10'){
    criaMosquitoTempo = 500

}else if (niveis === 'modolivre'){
    modoLivre()
    tempo = 1000
}

function dificuldadeTempo(pontosDeJogo){

    if (pontosDeJogo > 5 && pontosDeJogo < 10){
        criaMosquitoTempo = 100
        console.log("PASSOU DE NIVEL")
    }

    else if (pontosDeJogo >= 10 && pontosDeJogo <= 19){
        criaMosquitoTempo = 750
        console.log('nvel2')

    }
    else if (pontosDeJogo > 15){
        criaMosquitoTempo = 500
    }
    else if (pontosDeJogo > 60){
        criaMosquitoTempo = 250
    }
    else if (pontosDeJogo > 80){
        criaMosquitoTempo = 200
    }

}

//função pra ajustar o tamanho do palco
function ajustaTamanhoPalcoJogo(){
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

//cronometro
let cronometro = setInterval(function (){
    tempo -= 1
    if (tempo < 0){
        clearInterval(criaMosquito)
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'

    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

//Função posição randomica
function posicaoRandomica(){

    //remove o mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas < 1){

            window.location.href = 'game_over.html'
        }else {

            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas--
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) -90
    let posicaoY = Math.floor(Math.random() * altura) -90

    //Operador ternario ( if else)
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;


    console.log(posicaoX, posicaoY)

    //Elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = 'mosquito' + tamanhoRandom() + ' ' + 'ladoAleatorio' +  ladoAleatorio() ;
    mosquito.id = 'mosquito'
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute'
    mosquito.onclick = function (){
        this.remove()

    }
    document.body.appendChild(mosquito)
}


//funcao tamanhao random
function tamanhoRandom(){
   return Math.floor(Math.random() * 3) + 1
}

//funcao lado aleatorio
function ladoAleatorio(){
    return Math.floor(Math.random() * 2) + 1
}


let criaMosquito = setInterval(function (){
    posicaoRandomica()
}, criaMosquitoTempo)

//Função de jogo modo livre
function modoLivre(){

    posicaoRandomica()

    let pontos = document.createElement("div")
    pontos.className = 'pontuacao'
    pontos.innerHTML = pontosDeJogo

    document.addEventListener('click',function(e){
        if(e.target && e.target.id === 'mosquito'){
            pontosDeJogo = pontosDeJogo + 1
            pontos.innerHTML = pontosDeJogo
            dificuldadeTempo(pontosDeJogo)
        }
    });

    document.body.appendChild(pontos)


}
function createOver(){
if (window.location.href === 'game_over.html') {
    let over = document.createElement('div')
    over.className = 'gameOverLivre'

    document.appendChild(over)

    }
}
createOver()


// var aram = document.getElementById('mosquito')
//
// aram.onclick = function (ponto){
//     pontosDeJogo++
//     pontos.innerHTML = pontosDeJogo


// function contadorDePontos(mosca, pontuacao) {
//     return mosca.classList.contains(pontuacao);
// }
//
// window.addEventListener("click", function (e){
//     if (contadorDePontos(e.target, 'mosca')){
//
//         alert('as')
//     }
// }, false)


// document.addEventListener('click', function (e) {
//     if (hasClass(e.target, 'bu')) {
//         // .bu clicked
//         // Do your thing
//     } else if (hasClass(e.target, 'test')) {
//         // .test clicked
//         // Do your other thing
//     }
// }, false);


//function contadorPontos(elem, className) {
   // return elem.classList.contains(className);
//}


















// setInterval(function (){
//     pontosDeJogo += 1
//     pontos.innerHTML = pontosDeJogo
// },1000)
