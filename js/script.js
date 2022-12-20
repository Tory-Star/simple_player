const audio = new Audio();
const trackCard = document.getElementsByClassName('track');
const player = document.querySelector('.player');
const pauseBtn = document.querySelector('.player__controller_pause');
const stopBtn = document.querySelector('.player__controller_stop');
const pauseBtnCard = document.querySelector('.track__img-wrap');
 
const playMusic = (event) => {
    const trackActive = event.currentTarget;
    audio.src = event.currentTarget.dataset.track; 
    
    if(!trackActive.classList.contains('track_active')) {          
        audio.play();
        pauseBtn.classList.add('player__icon_play')
        player.classList.add('player_active')
    } else {        
        audio.pause();
        trackActive.classList.remove('track_active');  
        return false
    }

    for (let i = 0; i < trackCard.length; i++ ){
        trackCard[i].classList.remove('track_active') ;
    }
    trackActive.classList.add('track_active');    
};

for (let i = 0; i < trackCard.length; i++ ){
    trackCard[i].addEventListener('click', playMusic) ;
    
}
pauseBtn.addEventListener('click', () => {
    if (audio.paused){
        audio.play();
        pauseBtn.classList.remove('player__icon_play')
    }else {
        audio.pause();
        pauseBtn.classList.add('player__icon_play')
        pauseBtn.children
        console.log(pauseBtn.children)
    }
})

stopBtn.addEventListener('click', () => {    
    if  (audio.play){
        audio.src = '';
        player.classList.remove('player_active')
    }
})

/*pauseBtnCard.addEventListener('click', () => {
    if (audio.paused){
        audio.play();
        pauseBtn.classList.remove('player__icon_play')
    }else {
        audio.pause();
        pauseBtn.classList.add('player__icon_play')
        pauseBtn.children
        console.log(pauseBtn.children)
    }
})*/

