const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');

btnConvertir.addEventListener('click', function () {
    const valorCelsius = inputCelsius.value.trim();

    // Validación: campo vacío
    if (valorCelsius === '') {
        mensajeError.textContent = 'Por favor ingresa un valor en grados Celsius.';
        inputFahrenheit.value = '°F';
        return;
    }

    // Validación: valor numérico
    if (isNaN(valorCelsius)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        inputFahrenheit.value = '';
        return;
    }

    mensajeError.textContent = '';

    // Cálculo de la conversión
    const celsius = parseFloat(valorCelsius);
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Mostrar resultado en la caja readonly
    inputFahrenheit.value = fahrenheit.toFixed(2) + '°F';
});