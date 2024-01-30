let result = document.getElementById("display");

function calculate(number) {
    result.innerText += number;
}

function calculateResult() {
    try {
        result.innerText = eval(result.innerText);
    } catch (error) {
        displayError();
    }
}

function clearDisplay() {
    result.innerText = "";
}

function displayError() {
    result.innerText = "Error";
    setTimeout(clearDisplay, 1500); // Clear the error message after 1.5 seconds
}
