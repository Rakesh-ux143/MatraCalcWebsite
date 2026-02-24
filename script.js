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
