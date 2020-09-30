const game = {
    
}


const cards = document.querySelectorAll('.card')


function flipCard () {
    console.log(this)
}


document.addEventListener('DOMContentLoaded', () =>{
    for(let cardIndex in cards) {
        let card = cards[cardIndex]
        card.addEventListener('click', flipCard)
    }
})