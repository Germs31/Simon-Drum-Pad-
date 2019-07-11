//SIMON BEAT EDITION JAVASCRIPT
//DOM
const kickDrum = document.querySelector("#kick")
const snareDrum = document.querySelector("#snare")
const hiHats = document.querySelector("#hiHat")
const crash = document.querySelector("#cymbal")
const start = document.querySelector("#start")
const round = document.querySelector("#displayRound")

//GAME OBJECT
const game ={ 
    count: 1,
    possibilities: ["#kick","#snare","#hiHat","#cymbal"],
    currentGame: [],
    soundArray:[],
    player: [],
    start: true,
    sounds: {
        0: new Audio("sounds/kick.mp3"),
        1: new Audio("sounds/snare.mp3"),
        2: new Audio("sounds/hat.mp3"),
        3: new Audio("sounds/crash.mp3")
    },
    randomSound(){
        const index = Math.floor(Math.random() * 4)
        const randomSound = this.possibilities[index];
        this.currentGame.push(randomSound); 
        this.soundArray.push(index)
        console.log(this.currentGame) 
    },
    compPlay(){
        this.randomSound();
        let i = 0;
        this.player = [];
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
        },900)
    }, 
    playerPlay(){ 
        //DRUM BUTTONS       
        kickDrum.addEventListener('click', () => {
            this.player.push('#kick')
            game.sounds[0].currentTime = 0
            game.sounds[0].play();
            this.check()
            console.log(this.player)
        })
        snareDrum.addEventListener('click', () => {
            this.player.push("#snare")
            game.sounds[1].currentTime = 0
            game.sounds[1].play();
            this.check()
            console.log(this.player)
        })
        hiHats.addEventListener('click', () => {
            this.player.push("#hiHat")
            game.sounds[2].currentTime = 0
            game.sounds[2].play();
            this.check()
            console.log(this.player)
        })
        crash.addEventListener('click', () => {
            this.player.push("#cymbal")
            game.sounds[3].currentTime = 0
            game.sounds[3].play();
            this.check()
            console.log(this.player)
        }) 
    },
    clear(){
        round.innerText = "";
    },
    check(){
        if(this.player[this.player.length -1 ] !== this.currentGame[this.player.length -1]){
            this.count= 1,
            this.currentGame= [],
            this.soundArray=[],
            this.player= []
            this.clear();
            alert("game over")
        } else if(this.player.length === this.currentGame.length){
            round.innerText = game.count++;
            this.compPlay()

        }
    }
}


//START BUTTON 

start.addEventListener('click', () => {
    round.innerText = game.count++;
    game.compPlay();
    if (game.start){
        game.playerPlay();
        game.start = false
    }
})



