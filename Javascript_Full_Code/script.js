//set global variables 
let randomNum = Math.trunc (Math.random() * 100) + 1;
let score = 10;
let highscore = 0;
//

//function to changeMsg based on score
function changeMsg(text) {
    document.querySelector(".letGuessing").textContent = text;
}

//addEventListener function for checkBtn
document.querySelector(".checkBtn").addEventListener("click", function() {
    let inputUser = Number(document.querySelector(".input2").value);

    if (!inputUser) {
        changeMsg("Please enter a valid number");
    }

    else if (inputUser === randomNum) {
        changeMsg("⭐︎Correct!");

        document.querySelector("body").style.background = "linear-gradient(to right, #0F455B, #1CDC9C)";

        document.querySelector(".input").textContent = randomNum;

        questionColor = document.querySelector(".input");
        questionColor.style.background = "#DC7045";

        document.querySelector(".checkBtn").disabled = true;
        document.querySelector(".input2").disabled = "true";

        if (score > highscore) {
            highscore = score;

            //change 
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    else if (inputUser != randomNum) {
        if (score == 0) {
            changeMsg("You lose!");

            //write code to end game
            //disable checkBtn and input2
            document.querySelector(".checkBtn").disabled = true;
            document.querySelector(".input2").disabled = "true";

            //change body background to red
            document.querySelector("body").style.background = "linear-gradient(to right, red, black)";

        }

        else {
            inputUser > randomNum ? changeMsg("⇧Too high") : changeMsg("⇓Too low");
            score --;

            //change score to update score value
            document.querySelector(".score").textContent = score;
        } 
    }

});

//play button listener to restart game
document.querySelector(".play").addEventListener("click", function() {
    //keep same global variables (except highscore)
    randomNum = Math.trunc (Math.random() * 100) + 1;
    score = 10; 

    //change score back to 10
    document.querySelector(".score").textContent = score;

    //enable input2
    document.querySelector(".input2").disabled = false;

    //change message back to starter message
    changeMsg("Let's start guessing...");

    //change middle ? text back to starter "?" message
    document.querySelector(".input").textContent = "?";

    //enable check button
    document.querySelector(".checkBtn").disabled = false;

    //change background body color back to starter color
    document.querySelector("body").style.background = "linear-gradient(to right, purple, #DC7045)";

    //change middle ? text background color back to starter color(white);
    document.querySelector(".input").style.background = "white";
     
})

//The end