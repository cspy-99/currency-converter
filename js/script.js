let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currencyRate = currencyElement.value;
    let result = resultElement.value;

    result = amount / currencyRate;

    resultElement.innerText = result.toFixed(2);
});