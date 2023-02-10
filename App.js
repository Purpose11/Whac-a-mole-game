const square = document.querySelectorAll('.item')
const score = document.querySelector('#score')
const time = document.querySelector('#time-left')

let result = 0
let hitMOle
let timeleft = 60




function setMOle (){

    square.forEach( grid => {
        grid.classList.remove('mole')
    
    })
    
    let randomGrid = square[Math.floor(Math.random() * 9) ] 
    randomGrid.classList.add('mole')


    hitMOle = randomGrid.id 
}


square.forEach( grid => {
    grid.addEventListener('click', () => {
        if (grid.id === hitMOle){
            result++
            score.innerText = result
            hitMOle = null       
        }
      
    })
})


let moleInterval = setInterval(setMOle , 500)
setMOle();

let setTimer = setInterval( function countDown () {
    timeleft--
    time.innerText = timeleft

    if (timeleft === 0){
        // clearInterval(setTimer)
        alert('Game Over, Your Final Score is ' +result)
        timeleft = 60;
        result = 0;
        score.innerText = 0;
         
        console.log(timeleft);
                   
    }

},1000)

