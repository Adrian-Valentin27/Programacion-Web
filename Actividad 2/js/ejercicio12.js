const inputPesos = document.getElementById('peso');
const inputDolares = document.getElementById('dolar');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');

btnConvertir.addEventListener('click', function () {
    const valorPesos = inputPesos.value.trim();

    // Validación: campo vacío
    if (valorPesos === '') {
        mensajeError.textContent = 'Por favor ingresa un valor en kilometros.';
        inputDolares.value = '';
        return;
    }
    
    // Validación: valor numérico
    if (isNaN(valorPesos)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        inputDolares.value = '';
        return;
    }

    //Validación: Valor positivo
    if (valorPesos < 1){
    mensajeError.textContent='El numero debe de ser mayor a 0.';
    inputDolares.value='';
    return;
    }

    mensajeError.textContent = '';

    // Cálculo de la conversión
    const peso = parseFloat(valorPesos) ;
    const dolar = peso / 17.47;

    // Mostrar resultado en la caja readonly
    inputDolares.value = dolar.toFixed(2) + '' ;
});