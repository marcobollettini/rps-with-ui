let win = 0;
let loss = 0;
let draw = 0;
const sRound = document.querySelector('#sRound');
const aiScore = document.querySelector('#aiScore');
const yourScore = document.querySelector('#yourScore');
const choices = document.querySelectorAll('.choices');
yourScore.textContent = 0;
aiScore.textContent = 0;


//scelta random del pc

const pcPlay = () => {
    let aiChoices = ['rock', 'paper', 'scissors']
    let result = aiChoices[Math.floor(Math.random() * aiChoices.length)];
    return result;
}

//selezione del giocatore




choices.forEach(choice => {
    choice.addEventListener('click', () => {

        let youSelect = choice.id;
        let pcSelect = pcPlay();
        console.log(youSelect, pcSelect);
        console.log(playRound(youSelect, pcSelect));
        playRound(youSelect, pcSelect);

        // PARTITA A 5

        if (playRound(youSelect, pcSelect) === "win") {
            win++
            console.log(win, loss);
            yourScore.textContent = win;
            sRound.textContent = `you chose ${youSelect}, the computer chose ${pcSelect}: you ${playRound(youSelect, pcSelect)}!`;
            if (win >= 5) {
                alert('you won');
                win = 0;
                loss = 0;
                yourScore.textContent = win;
                aiScore.textContent = loss;

            }
        }
        else if (playRound(youSelect, pcSelect) === "lose") {
            loss++
            console.log(win, loss);
            aiScore.textContent = loss;
            sRound.textContent = `you chose ${youSelect}, the computer chose ${pcSelect}: you ${playRound(youSelect, pcSelect)}!`;
            if (loss >= 5) {
                alert('you lose');
                win = 0;
                loss = 0;
                aiScore.textContent = loss;
                yourScore.textContent = win;
            }
        }
        else {
            console.log(win, loss);
            sRound.textContent = `you chose ${youSelect}, the computer chose ${pcSelect}: you ${playRound(youSelect, pcSelect)}!`;
        }

    });

});


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






