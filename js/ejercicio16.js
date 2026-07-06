// Funciones flecha para las operaciones
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

// Función principal
const calcularOperacion = (tipo) => {
    const n1 = parseFloat(document.getElementById('numero1').value);
    const n2 = parseFloat(document.getElementById('numero2').value);
    const campoResultado = document.getElementById('resultado');

    // Validación: verificar si son números válidos
    if (isNaN(n1) || isNaN(n2)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingresa dos números válidos.'
        });
        return;
    }

    let resultado;
    switch (tipo) {
        case 'suma': resultado = sumar(n1, n2); break;
        case 'resta': resultado = restar(n1, n2); break;
        case 'multiplicacion': resultado = multiplicar(n1, n2); break;
        case 'division': 
            resultado = dividir(n1, n2); 
            if (resultado === 'Error: División por cero') {
                Swal.fire({ icon: 'warning', title: 'Error', text: resultado });
                return;
            }
            break;
    }

    campoResultado.value = resultado;
};