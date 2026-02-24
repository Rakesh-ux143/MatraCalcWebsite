function solveDoubt(){
    let input = document.getElementById("userInput").value.trim();
    let response = document.getElementById("response");

    // Remove spaces
    input = input.replace(/\s+/g, '');

    // Check valid math expression
    if(!/^[0-9+\-*/.]+$/.test(input)){
        response.innerHTML = "Please enter a valid math expression 😊";
        return;
    }

    try {
        // Split numbers and operators
        let numbers = input.split(/[\+\-\*\/]/).map(Number);
        let operators = input.split(/[0-9\.]+/).filter(op => op);

        let result = numbers[0];

        for(let i = 0; i < operators.length; i++){
            if(operators[i] === '+'){
                result += numbers[i+1];
            }
            else if(operators[i] === '-'){
                result -= numbers[i+1];
            }
            else if(operators[i] === '*'){
                result *= numbers[i+1];
            }
            else if(operators[i] === '/'){
                result /= numbers[i+1];
            }
        }

        response.innerHTML =
        "Hi Champ! 😊<br>" +
        input + " = <strong>" + result + "</strong><br>" +
        "Math Made Easy 💡";

    } catch {
        response.innerHTML = "Something went wrong. Try again!";
    }
}
