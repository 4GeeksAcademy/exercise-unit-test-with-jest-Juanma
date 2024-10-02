// Importar las funciones
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para convertir euros a dolares 
test("Un euro deberia ser 1.07 dolares", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

// Prueba para convertir dólares a yenes
test('Convertir 100 dólares a yenes japoneses', () => {
    const yen = fromDollarToYen(100);
    const expected = (100 / 1.07) * 156.5;  // Fórmula para convertir dólares a yenes
    expect(yen).toBe(expected);
});

// Prueba para convertir yenes a libras esterlinas
test('Convertir 10000 yenes a libras esterlinas', () => {
    const pounds = fromYenToPound(10000);
    const expected = (10000 / 156.5) * 0.87;  // Fórmula para convertir yenes a libras
    expect(pounds).toBe(expected);
});