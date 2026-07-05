const inputNumeros = document.getElementById('numeros');
const inputMayor = document.getElementById('mayor');
const inputMenor = document.getElementById('menor');
const inputPromedio = document.getElementById('promedio');
const btnCalcular = document.getElementById('btnCalcular');
const mensajeError = document.getElementById('mensajeError');

btnCalcular.addEventListener('click', function () {
    const valorNumeros = inputNumeros.value.trim();

    if (valorNumeros === '') {
        mensajeError.textContent = 'Por favor ingresa al menos un numero.';
        inputMayor.value = '';
        inputMenor.value = '';
        inputPromedio.value = '';
        return;
    }

    const arregloTexto = valorNumeros.split(',');

    const numeros = arregloTexto.map(function (valor) {
        return Number(valor.trim());
    });

    const hayInvalido = numeros.some(function (num) {
        return isNaN(num);
    });

    const hayVacio = arregloTexto.some(function (valor) {
        return valor.trim() === '';
    });

    if (hayInvalido || hayVacio) {
        mensajeError.textContent = 'Ingresa solo numeros validos separados por comas.';
        inputMayor.value = '';
        inputMenor.value = '';
        inputPromedio.value = '';
        return;
    }

    mensajeError.textContent = '';

    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

    const suma = numeros.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);
    const promedio = suma / numeros.length;

    inputMayor.value = mayor;
    inputMenor.value = menor;
    inputPromedio.value = promedio.toFixed(2);
});