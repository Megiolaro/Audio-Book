const botaoPlay = document.querySelector("#play")
const audio = document.querySelector(".audio")
const botaoNext = document.querySelector("#proximo")
const botaoBack = document.querySelector("#anterior")
const numeroCapitulo = document.querySelector(".numeroCapitulo")

const totalDeCapitulos = 10
let taTocando = 0
let capitulo = 1

function play(){
    if(taTocando === 0){
        audio.play()
        taTocando = 1
        botaoPlay.classList.remove("bi-play-circle-fill")
        botaoPlay.classList.add("bi-pause-circle-fill")
    }else{
        audio.pause()
        taTocando = 0
        botaoPlay.classList.remove("bi-pause-circle-fill")
        botaoPlay.classList.add("bi-play-circle-fill")
    }
    
}

function next(){
    if(capitulo === totalDeCapitulos){
        capitulo = 1
    }else{
        capitulo += 1
        
    }
    audio.src = `books/dom-casmurro/${capitulo}.mp3`
    numeroCapitulo.innerHTML = capitulo
    play()
}

function back(){
    if(capitulo === 1){
        capitulo = totalDeCapitulos
    }else{
    capitulo -= 1
   
    }
    audio.src = `books/dom-casmurro/${capitulo}.mp3`
    numeroCapitulo.innerHTML = capitulo
    play()
}


botaoPlay.addEventListener("click", play)
botaoNext.addEventListener("click", next)
botaoBack.addEventListener("click", back)