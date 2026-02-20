function showDoubtMode(){
    document.getElementById("doubtMode").style.display = "block";
    document.getElementById("challengeMode").style.display = "none";
}

function showChallengeMode(){
    document.getElementById("doubtMode").style.display = "none";
    document.getElementById("challengeMode").style.display = "block";
    generateQuestion();
}

/* ===================== DOUBT SOLVER ===================== */

function solveDoubt(){
    let input = document.getElementById("userInput").value;
    let response = document.getElementById("response");

    if(input.includes("+")){
        let parts = input.split("+");
        let a = parseInt(parts[0]);
        let b = parseInt(parts[1]);

        if(!isNaN(a) && !isNaN(b)){
            response.innerHTML =
            "Hi Champ! 😊<br>" +
            a + " + " + b + " = <strong>" + (a+b) + "</strong><br>" +
            "Great Job! Learn Smart with ChotuCalc 💡";
        }
    }

    else if(input.toLowerCase().includes("pythagoras")){
        response.innerHTML =
        "In a right triangle:<br>" +
        "a² + b² = c²<br>" +
        "Square of smaller sides equals square of longest side!";
    }

    else{
        response.innerHTML =
        "I am still learning this topic 😊<br>" +
        "Try asking addition like 25 + 35";
    }
}

/* ===================== CHALLENGE MODE ===================== */

let num1, num2;

function generateQuestion(){
    num1 = Math.floor(Math.random()*50);
    num2 = Math.floor(Math.random()*50);
    document.getElementById("question").innerHTML =
    "Solve Fast: " + num1 + " + " + num2;
}

function checkAnswer(){
    let userAns = parseInt(document.getElementById("answer").value);

    if(userAns === num1 + num2){
        document.getElementById("result").innerHTML =
        "🔥 Correct! You are a Math Warrior!";
    } else {
        document.getElementById("result").innerHTML =
        "❌ Wrong! Try Again!";
    }
}
