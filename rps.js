//scelta random del pc

const pcPlay = () => {
    let choices = ['rock', 'paper', 'scissors']
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

//selezione del giocatore
const choose = () => {
    let pImput = prompt("rock, paper or scissors?");
    /*   if (pImput == null || undefined) {
          choose();
      } */
    if (pImput.toLowerCase() === "rock" || pImput.toLowerCase() === "paper" || pImput.toLowerCase() === "scissors") {
        pImput = pImput.toLowerCase();
        return pImput

    }
    else {

    }
    //else choose(); */
}


//svolgimeto del ROUND
const playRound = (youSelect, pcSelect) => {
    if (youSelect === "rock") {
        if (pcSelect === "scissors") {
            let roundres = "win";
            return roundres;
        }
        else if (pcSelect === "rock") {
            let roundres = "draw";
            return roundres;
        }
        else {
            let roundres = "lose";
            return roundres;
        }
    }
    else if (youSelect === "paper") {
        if (pcSelect === "scissors") {
            let roundres = "lose";
            return roundres;
        }
        else if (pcSelect === "rock") {
            let roundres = "win";
            return roundres;
        }
        else {
            let roundres = "draw";
            return roundres;
        }

    }
    else if (youSelect === "scissors") {
        if (pcSelect === "scissors") {
            let roundres = "draw";
            return roundres;
        }
        else if (pcSelect === "rock") {
            let roundres = "lose";
            return roundres;
        }
        else {
            let roundres = "win";
            return roundres;
        }
    }
    else {
        return roundres = "should choose a valid move"
    }

}

let win = 0;
let loss = 0;
let draw = 0;


// RIPETI 5 VOLTE I ROUND PER FARE UN GAME
for (i = 0; i < 5; i++) {
    const pcSelect = pcPlay();
    const youSelect = choose();
    const round = playRound(youSelect, pcSelect);
    if (round === "win") {
        win++;
    }
    else if (round === "lose") {
        loss++;
    }
    else {
        draw++;
    }
    console.log(`you chose ${youSelect}, the computer chose ${pcSelect}: you ${round}!`);
}

//DECIDE CHI HA VINTO
const gameWinner = (win, loss) => {
    if (win > loss) {
        return "YOU WON!"
    }
    else if (loss > win) {
        return "YOU LOSE :("
    }
    else {
        return "IT'S A DRAW"
    }
}
console.log(gameWinner(win, loss))
