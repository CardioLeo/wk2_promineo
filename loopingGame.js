var points = 0;
var pointsReset = false; 

for (let turns = 0; turns === 100 && points === 290; turns++) {
        if (turns % 2 === 0) {
                points = points + 5;
                console.log("Turns: " + turns + " Score: " + points);
        } else if (turns % 2 === 1) {
                points = points + 3;
                console.log("Turns: " + turns + " Score: " + points);
        } else if (points === 125) {
            pointsReset = true;
                if (pointsReset === true) {
                    points = 25;
                    console.log("Oops, you've reached 125 points!");
                    console.log("Your points have been set to: " + points)
                    pointsReset = false;
                }
        } else { if (turns === 100 || points === 290) {
            gameOn === false;
            console.log("The game has ended");
        }
    }
}
