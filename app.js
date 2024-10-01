// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5,  // 1 euro es 156.5 yenes japoneses
    "USD": 1.07,   // 1 euro es 1.07 dólares estadounidenses
    "GBP": 0.87    // 1 euro es 0.87 libras esterlinas
};

// Convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // Primero convertir de dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Luego convertir de euros a yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

// Convertir de yenes a libras esterlinas
const fromYenToPound = function(valueInYen) {
    // Primero convertir de yenes a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Luego convertir de euros a libras esterlinas
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

// Euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

// Suma de dos numeros
const sum = (a,b) => {
    return a + b
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };