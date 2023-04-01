function calculator() {
    let operator = document.getElementById("operator").value;
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let answer = document.getElementById("ans");
    answer.style.color = 'green';

    switch (operator) {
        case '+':
            answer.innerHTML = firstNumber + secondNumber;
            break;
        case '-':
            answer.innerHTML = firstNumber - secondNumber;
            break;
        case '*':
            answer.innerHTML = firstNumber * secondNumber;
            break;
        case '/':
            answer.innerHTML = firstNumber / secondNumber;
            break;

        default:
            answer.style.color = 'red';
            answer.innerHTML = "Invalid";
    }
}

const submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click', calculator);
