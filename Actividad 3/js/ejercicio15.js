const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const mensajeError = document.getElementById('mensajeError');
const listaEstudiantes = document.getElementById('listaEstudiantes');

const inputPromedio = document.getElementById('promedio');
const inputMasAlta = document.getElementById('masAlta');
const inputMasBaja = document.getElementById('masBaja');

// Arreglo donde se guardaran los objetos estudiante
let estudiantes = [];

btnAgregar.addEventListener('click', function () {
    const nombre = inputNombre.value.trim();
    const calificacionTexto = inputCalificacion.value.trim();

    // Validacion: campos vacios
    if (nombre === '' || calificacionTexto === '') {
        mensajeError.textContent = 'Ingresa el nombre y la calificacion.';
        return;
    }

    const calificacion = Number(calificacionTexto);

    // Validacion: calificacion numerica valida
    if (isNaN(calificacion)) {
        mensajeError.textContent = 'La calificacion debe ser un numero valido.';
        return;
    }

    mensajeError.textContent = '';

    // Crear el objeto estudiante y agregarlo al arreglo
    const estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };
    estudiantes.push(estudiante);

    // Mostrar el estudiante agregado en la lista visual
    const item = document.createElement('li');
    item.textContent = estudiante.nombre + ' - ' + estudiante.calificacion;
    listaEstudiantes.appendChild(item);

    // Limpiar los campos de entrada
    inputNombre.value = '';
    inputCalificacion.value = '';
    inputNombre.focus();
});

btnCalcular.addEventListener('click', function () {
    // Validacion: debe haber al menos un estudiante agregado
    if (estudiantes.length === 0) {
        mensajeError.textContent = 'Agrega al menos un estudiante antes de calcular.';
        inputPromedio.value = '';
        inputMasAlta.value = '';
        inputMasBaja.value = '';
        return;
    }

    mensajeError.textContent = '';

    // Calculo del promedio usando reduce
    const suma = estudiantes.reduce(function (total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);
    const promedio = suma / estudiantes.length;

    // Calculo de la calificacion mas alta y mas baja
    const calificacionMaxima = Math.max(...estudiantes.map(function (e) {
        return e.calificacion;
    }));
    const calificacionMinima = Math.min(...estudiantes.map(function (e) {
        return e.calificacion;
    }));

    // Buscar el estudiante correspondiente a cada calificacion extrema
    const estudianteMasAlto = estudiantes.find(function (e) {
        return e.calificacion === calificacionMaxima;
    });
    const estudianteMasBajo = estudiantes.find(function (e) {
        return e.calificacion === calificacionMinima;
    });

    // Mostrar resultados en las cajas readonly
    inputPromedio.value = promedio.toFixed(2);
    inputMasAlta.value = estudianteMasAlto.nombre;
    inputMasBaja.value = estudianteMasBajo.nombre;
});