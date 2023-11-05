{
const calculateResult = (amount, currency) => {
    const rateUSD = 4.46;
    const rateCZK = 0.2;
    const rateGBP = 5.33;
    const rateEUR = 4.71;

    switch (currency) {
        case "USD":
            return amount / rateUSD;

        case "CZK":
            return amount / rateCZK;

        case "GBP":
            return amount / rateGBP;

        case "EUR":
            return amount / rateEUR;
    }
};

const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = result.toFixed(2);
}
const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currencyElement.value);

    updateResultText(amount, result, currency);
};

const init = () => {
    const formElement = document.querySelector(".js-form");
    
    formElement.addEventListener("submit", onFormSubmit);
}

init();
}