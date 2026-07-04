const inputEdad = document.getElementById('edad');
const inputAprovacion = document.getElementById('aprovar');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');

btnConvertir.addEventListener('click', function () {
    const valorEdad = inputEdad.value.trim();

    // Validación: campo vacío
    if (valorEdad === '') {
        mensajeError.textContent = 'Por favor ingresa una edad.';
        inputAprovacion.value = '';
        return;
    }

    const edad = parseInt(valorEdad);

    // Validación: numero positivo
    if (isNaN(edad) || edad < 1) {
        mensajeError.textContent = 'La edad debe ser un numero positivo.';
        inputAprovacion.value = '';
        return;
    }

    mensajeError.textContent = '';

    // Evaluacion de la edad
    if (edad >= 18) {
        inputAprovacion.value = 'Puedes votar';
    } else {
        inputAprovacion.value = 'No puedes votar';
    }
});