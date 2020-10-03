# pokemon-matcher

Pokemon Matcher is a memory matching game that is pokmeon themed. 

### Demo

[Pokemon Matcher](https://cam-em.github.io/pokemon-matcher/)

### Game Instructions

You are to match each card before 50 moves. Once you reach 50 moves(pair of cards being matched), you lose the game. You will be prompted if you'd like to play again and the loss will be counted against you. There is also a reset board function if you get frustrated and give up, but be careful! This will cause your loss score to go up.

## Built With

* JavaScript
* HTML
* CSS
* VanillaJS
* FlexBox

#### Credits
    shuttershock.com

## Approach

#### Overview
My overall approach was to first start on the visuals then plug in the logic of the game for "visual testing" as I developed the game

#### User stories

As a user I expect to
* Immediately know how to start
* Have enough time to see cards before the match over
* Know how many turns I've made
* Know if I won or lost
* See how many times I won or lost

#### Development Plan

My development plan as mentioned in to the overview was to first start with the visual aspect of the game

* Find Images
* Create HTML
* Style HTML w/ CSS
* Add MVP game logic

#### MVP

* All cards available and styled. Game logic intact
* Scoreboard implemented into the game
* Prompts for user to continue or end the game

#### Stretch goals

* Add more buttons for user functionality
* Add a timer to play against
* User based system w/ hiscores

## Challenges

My first challenge was styling and figuring out how to flip the cards. I was unaware of some of the transition and transform properties for CSS that helped me achieve this along with JavaScript DOM manipulation.

My current challenge is working with modals for user prompting. There's a current issue that once a user answers a prompt, a folling blank prompt is create.

### Demo

[Pokemon Matcher](https://cam-em.github.io/pokemon-matcher/)