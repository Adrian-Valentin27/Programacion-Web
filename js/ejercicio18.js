const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

const agregarElemento = () => {
    const texto = input.value.trim(); 

    if (texto !== '') {
        const li = document.createElement('li');
        li.classList.add(
            'list-group-item', 
            'd-flex', 
            'justify-content-between', 
            'align-items-center', 
            'mb-2', 
            'border', 
            'rounded-3', 
            'shadow-sm'
        );

        // Crear un contenedor de texto para que no interfiera con el diseño del botón
        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        spanTexto.classList.add('text-secondary', 'fw-medium');
        li.appendChild(spanTexto);

        // Crear el botón de eliminar con clases de Bootstrap (Rojo y pequeño)
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'fw-bold', 'px-3');
        
        // Manejador de eventos para remover el elemento del DOM al hacer clic
        botonEliminar.addEventListener('click', () => {
            li.remove();
        });

        // Armar la estructura del nodo e inyectarlo al contenedor principal
        li.appendChild(botonEliminar);
        lista.appendChild(li);

        // Limpieza y usabilidad: Vaciar input y devolverle el foco de escritura
        input.value = '';
        input.focus();
    } else {
        alert('Por favor, escribe algo válido para agregar a la lista.');
    }
};

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarElemento();
    }
});