//GAME OBJECT
const game ={ 
    count: 1,
    possibilities: ["#kick","#snare","#hiHat","#cymbal"],
    currentGame: [],
    soundArray:[],
    player: [],
    sounds: {
        0: new Audio("sounds/kick.mp3"),
        1: new Audio("sounds/snare.mp3"),
        2: new Audio("sounds/hat.mp3"),
        3: new Audio("sounds/crash.mp3")
    },
    clearGame(){
        game.currentGame = [];
        game.count = 0;
    },
    randomSound(){
        const index = Math.floor(Math.random() * 4)
        const randomSound = this.possibilities[index];
        this.currentGame.push(randomSound); 
        this.soundArray.push(index)
        console.log(this.currentGame) 
        // this.compPlay();
    },
    compPlay(){
       let i = 0;
       const myInt = setInterval(() => {
           // sound represents the sound that will be played
            let sound = this.soundArray[i]
            //compSound represents the element that will be lit
            let compSound = this.currentGame[i];
            let selected = document.querySelector(`${compSound}`)
            selected.classList.add("hover")
            this.sounds[`${sound}`].play()
            setTimeout(()=>{
                selected.classList.remove("hover")
            },500)
            if(i === this.currentGame.length -1 ){
                clearInterval(myInt)
            }
            i++;
       },1000)

       
    }
}
//DOM
const kickDrum = document.querySelector("#kick")
const snareDrum = document.querySelector("#snare")
const hiHats = document.querySelector("#hiHat")
const crash = document.querySelector("#cymbal")
const start = document.querySelector("#start")
const round = document.querySelector("#displayRound")

//BUTTON EVENTS 
kickDrum.addEventListener('click', () => {
    game.sounds[0].play();
})
snareDrum.addEventListener('click', () => {
    game.sounds[1].play();
})
hiHats.addEventListener('click', () => {
    game.sounds[2].play();
})
crash.addEventListener('click', () => {
    game.sounds[3].play();
})
start.addEventListener('click', () => {
    round.innerText = game.count++;
    game.randomSound();
    game.compPlay(); 
})

