const manejarTareas = () => {
    
    // Función privada (Scope Local al closure)
    const obtenerTareas = () => {
        const tareasJSON = localStorage.getItem("tareas");
        // Convertimos el JSON a un Array de JS, o retornamos un array vacío si no hay datos
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };

    // Función privada
    const agregarTarea = (tarea) => {
        const tareas = obtenerTareas();
        tareas.push(tarea);
        // Convertimos el Array a JSON para guardarlo
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    // Función privada
    const eliminarTarea = (indice) => {
        const tareas = obtenerTareas();
        tareas.splice(indice, 1); // Eliminamos 1 elemento en la posición del índice
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    // El Closure expone únicamente los métodos que queremos hacer públicos
    return {
        obtener: obtenerTareas,
        agregar: agregarTarea,
        eliminar: eliminarTarea
    };
};

// Instanciamos nuestro gestor (ahora 'gestor' tiene acceso a los métodos públicos)
const gestor = manejarTareas();

/*
 * SCOPE GLOBAL
 * Estas funciones interactúan con el DOM y usan el gestor.
 */
const renderizarTareas = () => {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = ""; 
    
    const tareas = gestor.obtener();

    tareas.forEach((tarea, indice) => {
        const li = document.createElement("li");
        li.textContent = tarea;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => confirmarEliminacion(indice);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
};

const agregarNuevaTarea = () => {
    const inputArea = document.getElementById("nuevaTarea");
    const tareaTexto = inputArea.value.trim();

    if (tareaTexto === "") {
        Swal.fire({ icon: "error", title: "Error", text: "La tarea no puede estar vacía." });
        return;
    }

    gestor.agregar(tareaTexto);
    inputArea.value = ""; // Limpiamos el input
    renderizarTareas(); // Actualizamos la vista
};

const confirmarEliminacion = (indice) => {
    // Uso de SweetAlert2 para confirmar la acción destructiva
    Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e74c3c",
        cancelButtonColor: "#95a5a6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            gestor.eliminar(indice);
            renderizarTareas();
            Swal.fire("¡Eliminada!", "La tarea ha sido borrada con éxito.", "success");
        }
    });
};

// Al cargar la página por primera vez, dibujamos las tareas que haya en LocalStorage
renderizarTareas();