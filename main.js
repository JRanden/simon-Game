// const wrapper = document.querySelector('#table')

// const area1 = document.querySelector('#area1')

// addEventListener('click', event => {
//     console.log(event.target.id)
// })

let sequence = [];

let level=0;

let humanSequence = [];

const button = document.querySelector('.startButton');

const info = document.querySelector('.info')

function activateTile(color) {
    console.log(color)
    const tile = document.querySelector(`[data-tile='${color}']`);
    const sound =document.querySelector(`[data-sound='${color}]`);
    
    tile.classList.add('activated')
    // sound.play();

    setTimeout(() => {
        tile.classList.remove('activated');
        } ,300);
    }

    function playRound(nextSequence){
        nextSequence.forEach((color, index) => {    
            setTimeout(()=> {
                activateTile(color);
            }, (index +1) * 600);
         });
        }

function nextStep() {
    const tiles = ['red','blue','green','yellow']
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    console.log(random)

    return random;
}

function nextRound () {
    level +=1;
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);
}

function startgame () {
    button.classList.add('.info-hidden')
    info.classList.remove('.info-hidden')
    info.textContent = "Wait...";
    nextRound();
}

button.addEventListener('click', startgame)

