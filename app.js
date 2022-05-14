class Casino {
    constructor(name, isfakeCoin) {
        this.name = name;
        this.timesPlayed = 0;
        this.isfakeCoin = isfakeCoin;
    }

    playGame(betAmount) {
        this.timesPlayed += 1;
        if (Math.random() > 0.5 && this.fakeCoin === false) {
            console.log("You win " + betAmount * this.timesPlayed);
        } else {
            console.log(this.name + "Wins!");
        }
    }
}

let casino = new Casino("HackerU Casino");
casino.playGame(5);
casino.playGame(15);
casino.playGame(25);
casino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
