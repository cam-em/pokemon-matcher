const game = {
    'cardFlipped': false,
    'firstCard': null,
    'firstCardID': null,
    'secondCard': null,
    'secondCardID': null,
    'cardMatchCount': 0,
    'guesses': 0,
    'locked': false,
    'gamesWon': 0
}


let cards
const htmlScores = document.querySelectorAll('.score')

let cardMatchScore = htmlScores[0].childNodes[0]
let guessesScore = htmlScores[1].childNodes[0]
let gamesWonScore = htmlScores[2].childNodes[0]
let gamesLossScore = htmlScores[3].childNodes[0]


function flipCard () {

    if(game.locked) {
        return;
    }

    if(this === game.firstCard) {
        return;
    }

    this.classList.add('turn')
    
    if(!game.cardFlipped) {
        game.cardFlipped = true
        game.firstCard = this
        game.firstCardID = game.firstCard.childNodes[1].id
    } else {
        game.cardFlipped = false
        game.secondCard = this
        game.secondCardID = game.secondCard.childNodes[1].id
    }

    if(game.firstCard !== null && game.secondCard !== null) {
        checkForMatch()
    }
}


function checkForMatch() {
    game.locked = true
    game.guesses++
    guessesScore.data = game.guesses

    if(game.firstCardID === game.secondCardID) {
        game.firstCard.removeEventListener('click', flipCard)
        game.secondCard.removeEventListener('click', flipCard)
        game.cardMatchCount++
        cardMatchScore.data = game.cardMatchCount
        game.locked = false
        resetCards()
    } else {
        if(game.cardMatchCount < 10) {
            setTimeout(() => {
            game.firstCard.classList.remove('turn')
            game.secondCard.classList.remove('turn')
            game.locked = false
            resetCards()
            }, 1000)
        }
    }

    setTimeout(() => {
        checkIfGameWon()
    }, 3000)
    
    console.log(game.guesses)
}


function resetCards() {
    game.firstCard = null
    game.secondCard = null
}


function resetGame() {
    game.cardFlipped = false
    game.firstCard = null
    game.firstCardID = null
    game.secondCard = null
    game.secondCardID = null
    game.cardMatchCount = 0
    game.guesses = 0
    game.locked = false
    
    cardMatchScore.data = 0
    guessesScore.data = 0

    for(let card of cards) {
        card.classList.remove('turn')
    }

    addEventToCards()
}


function checkIfGameWon() {
    if(game.cardMatchCount >= 10) {
        console.log('You won!')
        game.gamesWon++
        gamesWonScore.data = game.gamesWon
        resetGame()
    }
}


function addEventToCards() {
    for(let cardIndex in cards) {
        let card = cards[cardIndex]
        card.addEventListener('click', flipCard)
    }
}


document.addEventListener('DOMContentLoaded', () =>{
    cards = document.querySelectorAll('.card')
    document.querySelector('#reset').addEventListener('click', resetGame)

    addEventToCards()
    


})