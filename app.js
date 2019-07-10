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
    }, 
    playerPlay(){        
        kickDrum.addEventListener('click', () => {
            game.sounds[0].play();
            this.player.push('#kick')
            console.log(this.player)
        })
        snareDrum.addEventListener('click', () => {
            game.sounds[1].play();
            this.player.push("#snare")
            console.log(this.player)
        })
        hiHats.addEventListener('click', () => {
            game.sounds[2].play();
            this.player.push("#hitHat")
            console.log(this.player)
        })
        crash.addEventListener('click', () => {
            game.sounds[3].play();
            this.player.push("#cymbal")
            console.log(this.player)
        }) 
    },
    check(){
        if(this.player === this.currentGame){
            alert('cool')
        } else {
            alert('not cool')
        }
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

start.addEventListener('click', () => {
    round.innerText = game.count++;
    game.compPlay();
    game.playerPlay();
})

