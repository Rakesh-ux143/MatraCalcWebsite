function solveDoubt() {
    let input = document.getElementById("userInput").value;
    let response = document.getElementById("response");

    // Remove spaces
    input = input.replace(/\s+/g, '');

    // Check valid characters
    if (!/^[0-9+\-*/.]+$/.test(input)) {
        response.innerHTML = "Enter valid numbers with + - * /";
        return;
    }

    let numbers = input.split(/[\+\-\*\/]/).map(Number);
    let operators = input.match(/[\+\-\*\/]/g) || [];

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        let nextNumber = numbers[i + 1];

        if (operators[i] === '+') {
            result += nextNumber;
        }
        else if (operators[i] === '-') {
            result -= nextNumber;
        }
        else if (operators[i] === '*') {
            result *= nextNumber;
        }
        else if (operators[i] === '/') {
            result /= nextNumber;
        }
    }

    response.innerHTML = input + " = <strong>" + result + "</strong>";
}
