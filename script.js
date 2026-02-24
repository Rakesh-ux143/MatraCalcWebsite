function solveDoubt(){
    let input = document.getElementById("userInput").value.trim();
    let response = document.getElementById("response");

    // Remove spaces
    input = input.replace(/\s+/g, '');

    // Validate input
    if(!/^[0-9+\-*/.]+$/.test(input)){
        response.innerHTML = "Please enter valid numbers with + - * / only 😊";
        return;
    }

    // Split numbers and operators
    let numbers = input.split(/[\+\-\*\/]/).map(Number);
    let operators = input.match(/[\+\-\*\/]/g);

    if(!operators){
        response.innerHTML = "Enter an expression like 10+20-5";
        return;
    }

    let result = numbers[0];

    for(let i = 0; i < operators.length; i++){
        if(operators[i] === '+'){
            result = result + numbers[i+1];
        }
        else if(operators[i] === '-'){
            result = result - numbers[i+1];
        }
        else if(operators[i] === '*'){
            result = result * numbers[i+1];
        }
        else if(operators[i] === '/'){
            result = result / numbers[i+1];
        }
    }

    response.innerHTML =
    "Hi Champ 😊<br>" +
    input + " = <strong>" + result + "</strong>";
}
