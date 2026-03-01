function solveDoubt() {
    const inputField = document.getElementById("userInput");
    const response = document.getElementById("response");

    let input = inputField.value.trim();

    // Remove spaces
    input = input.replace(/\s+/g, '');

    // Allow only numbers and + - * /
    if (!/^[0-9+\-*/.]+$/.test(input)) {
        response.innerHTML = "Use only numbers with + - * /";
        return;
    }

    // Extract numbers
    let numbers = input.split(/[\+\-\*\/]/).filter(n => n !== "").map(n => parseFloat(n));

    // Extract operators
    let operators = input.replace(/[0-9.]/g, "").split("");

    if (numbers.length === 0) {
        response.innerHTML = "Enter something like 10+20+30";
        return;
    }

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        let next = numbers[i + 1];

        if (operators[i] === '+') result += next;
        else if (operators[i] === '-') result -= next;
        else if (operators[i] === '*') result *= next;
        else if (operators[i] === '/') result /= next;
    }

    response.innerHTML = input + " = <strong>" + result + "</strong>";
}

// =============================
// 🔹 CALCSTORM CHALLENGE MODE
// =============================

let correctAnswer;
let currentDigit;

function showChallengeMode(){
    document.getElementById("doubtMode").style.display = "none";
    document.getElementById("challengeMode").style.display = "block";
}

// Back button functionality
function goBack() {
    document.getElementById("questionSection").style.display = "none";
    document.getElementById("setupSection").style.display = "block";

    // Clear previous question and input
    document.getElementById("question").innerText = "";
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}

function generateQuestion(){
    let operation = document.getElementById("operation").value;
    let count = parseInt(document.getElementById("count").value);
    currentDigit = parseInt(document.getElementById("digit").value);

    if(!count || count < 1){
        alert("Enter valid number count");
        return;
    }

    if(!currentDigit || currentDigit < 1 || currentDigit > 10){
        alert("Digit must be between 1 and 10");
        return;
    }

    let numbers = [];
    let min = Math.pow(10, currentDigit - 1);
    let max = Math.pow(10, currentDigit) - 1;

    for(let i = 0; i < count; i++){
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNum);
    }

    let questionText = "";

    if(operation === "add"){
        correctAnswer = numbers.reduce((a,b)=>a+b);
        questionText = numbers.join(" + ");
    }
    else if(operation === "sub"){
        correctAnswer = numbers.reduce((a,b)=>a-b);
        questionText = numbers.join(" - ");
    }
    else if(operation === "mul"){
        correctAnswer = numbers.reduce((a,b)=>a*b);
        questionText = numbers.join(" × ");
    }
    else if(operation === "div"){
        correctAnswer = numbers.reduce((a,b)=>a/b);
        questionText = numbers.join(" ÷ ");
        correctAnswer = parseFloat(correctAnswer.toFixed(2));
    }
    else if(operation === "square"){
        let n = numbers[0];
        correctAnswer = n * n;
        questionText = n + "²";
    }
    else if(operation === "cube"){
        let n = numbers[0];
        correctAnswer = n * n * n;
        questionText = n + "³";
    }

    document.getElementById("question").innerText = questionText;
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";

    document.getElementById("setupSection").style.display = "none";
    document.getElementById("questionSection").style.display = "block";

    // ✅ Add Enter key listener for auto-submit
    const answerInput = document.getElementById("answer");
    answerInput.focus(); // optional: focus the input automatically
    answerInput.addEventListener("keydown", function(event) {
        if(event.key === "Enter"){
            checkAnswer();
        }
    }, { once: true }); // run once per question
}

function checkAnswer(){
    let userAnswer = parseFloat(document.getElementById("answer").value);

    if(userAnswer === correctAnswer){
        document.getElementById("result").innerHTML = "🔥 Correct! You are CalcStorm!";
        
        // Automatically generate a new question after 2 seconds
        setTimeout(() => {
            document.getElementById("answer").value = "";
            document.getElementById("result").innerHTML = "";
            generateQuestion();
        }, 2000);
    } else {
        document.getElementById("result").innerHTML = 
            "❌ Wrong! Correct answer is <strong>" + correctAnswer + "</strong>";
    }
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const chatBox = document.getElementById("chatBox");

    let message = input.value.trim();
    if (message === "") return;

    // Create user message
    let userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);

    // Simple bot reply logic (temporary)
    let botReply = getBotResponse(message);

    let botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.innerText = botReply;
    chatBox.appendChild(botMsg);

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
}

function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("hello"))
        return "Hello 👋 I am MatraAI!";
    
    if (message.includes("who are you"))
        return "I am MatraAI, your Human Calculator Assistant 🤖";
    
    if (message.includes("math"))
        return "I love math! Ask me any calculation.";
    
    return "Interesting question! Soon I will be powered by real AI 🚀";
}
