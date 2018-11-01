
    // Give function to click action on crystal images. 
    // When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
    // This code will run as soon as the page loads.
    window.onload = function() {
        $("#blue").on("click", givePoints1);
        $("#green").on("click", givePoints2);
        $("#red").on("click", givePoints3);
        $("#orange").on("click", givePoints4);
    };

    // The random number shown at the start of the game should be between 19 - 120.
    var randomNum = Math.floor(Math.random() * 101 + 19);
    console.log(randomNum);

    // Each crystal should have a random hidden value between 1 - 12.
    var number1 = Math.floor(Math.random() * 11 + 1);
    console.log("Blue points: " + number1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    console.log("Green points: " + number2);
    var number3 = Math.floor(Math.random() * 11 + 1);
    console.log("Red points: " + number3);
    var number4 = Math.floor(Math.random() * 11 + 1);
    console.log("Orange points: " + number4);

    var sumScore = 0;
    var countWins = 0;
    var countLooses = 0;
    
    // Add variables to called id:
    $("#randomNumber").text(randomNum);
    $("#wins").text(countWins);
    $("#looses").text(countLooses);
    $("#totalScore").text(sumScore);

    // Restart game to auto play again. Numbers are given random again. Total score set to 0.
    function restartGame() {
        randomNum = Math.floor(Math.random() * 101 + 19);
        console.log(randomNum);
        $("#randomNumber").text(randomNum);
        number1 = Math.floor(Math.random() * 11 + 1);
        console.log("Blue points: " + number1);
        number2 = Math.floor(Math.random() * 11 + 1);
        console.log("Green points: " + number2);
        number3 = Math.floor(Math.random() * 11 + 1);
        console.log("Red points: " + number3);
        number4 = Math.floor(Math.random() * 11 + 1);
        console.log("Orange points: " + number4);
        sumScore = 0;
        $("#totalScore").text(sumScore);
    }

    // Count wins, then restart game to play again.
    function winGame() {
        countWins++;
        $("#wins").text(countWins);
        $("#totalScore").text(sumScore + "  Win!");
        setTimeout(function() { // restartGame() will work supper faster right after be called,
            restartGame();      // so we have to setTimeout to wait totalScore shows number first, then restart game after 2 second.    
        }, 2000);
    }

    // Count looses, then restart game to play again.
    function looseGame() {
        countLooses++;
        $("#looses").text(countLooses);
        $("#totalScore").text(sumScore + "  Loose!");
        setTimeout(function() {
            restartGame();
        }, 2000);
    }


    // Add points gived by click on crystal images to total score. 
    // The player wins if total score matches the random number from the beginning of the game.
    // The player loses if total score goes above the random number.

    function givePoints1() {
        sumScore = sumScore + number1;
        console.log("Total score: " + sumScore);
        $("#totalScore").text(sumScore);
        if (sumScore == randomNum) {
            winGame();
        }
        else if (sumScore > randomNum) {
            looseGame();
        }
    }

    function givePoints2() {
        sumScore = sumScore + number2;
        console.log("Total score: " + sumScore);
        $("#totalScore").text(sumScore);
        if (sumScore == randomNum) {
            winGame();
        }
        else if (sumScore > randomNum) {
            looseGame();
        }
    }

    function givePoints3() {
        sumScore = sumScore + number3;
        console.log("Total score: " + sumScore);
        $("#totalScore").text(sumScore);
        if (sumScore == randomNum) {
            winGame();
        }
        else if (sumScore > randomNum) {
            looseGame();
        }
    }

    function givePoints4() {
        sumScore = sumScore + number4;
        console.log("Total score: " + sumScore);
        $("#totalScore").text(sumScore);
        if (sumScore == randomNum) {
            winGame();
        }
        else if (sumScore > randomNum) {
            looseGame();
        }
    }










