const inputKilometro = document.getElementById('kilometro');
const inputMillas = document.getElementById('Millas');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');

btnConvertir.addEventListener('click', function () {
    const valorKilometro = inputKilometro.value.trim();

    // Validación: campo vacío
    if (valorKilometro === '') {
        mensajeError.textContent = 'Por favor ingresa un valor en kilometros.';
        inputMillas.value = '';
        return;
    }
    
    // Validación: valor numérico
    if (isNaN(valorKilometro)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        inputMillas.value = '';
        return;
    }

    //Validación: Valor positivo
    if (valorKilometro < 1){
    mensajeError.textContent='El numero debe de ser mayor a 0.';
    inputMillas.value='';
    return;
    }

    mensajeError.textContent = '';

    // Cálculo de la conversión
    const kilometros = parseFloat(valorKilometro) ;
    const Millas = kilometros * 0.621371;

    // Mostrar resultado en la caja readonly
    inputMillas.value = Millas.toFixed(2) + '' ;
});