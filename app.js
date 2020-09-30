const game = {
    'cardFlipped': false,
    'firstCard': null,
    'secondCard': null
}


const cards = document.querySelectorAll('.card')


function flipCard () {
    this.classList.add('turn')
    
    if(!game.cardFlipped) {
        game.firstCard = this;
    }

    console.log(game.firstCard)
}


document.addEventListener('DOMContentLoaded', () =>{
    for(let cardIndex in cards) {
        let card = cards[cardIndex]
        card.addEventListener('click', flipCard)
    }
})