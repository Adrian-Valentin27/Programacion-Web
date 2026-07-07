const ToastUI = {
    init() {
        if (!document.getElementById('toast-container')) {
            const container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
    },

    // Método para construir y mostrar el componente
    show(options) {
        this.init(); 
        
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');

        // Recepción de parámetros dinámicos con valores por defecto
        const typeClass = options.type ? `toast-${options.type}` : 'toast-info';
        const message = options.message || 'Notificación generada dinámicamente';
        const duration = options.duration || 3000; 

        toast.className = `toast-message ${typeClass}`;
        toast.innerHTML = `
            <span>${message}</span>
            <button class="toast-close" aria-label="Cerrar notificación">&times;</button>
        `;

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.remove(toast));

        container.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);

        // Temporizador para destruir el componente automáticamente
        setTimeout(() => {
            this.remove(toast);
        }, duration);
    },

    // Método interno para manejar la animación de salida y limpieza del DOM
    remove(toast) {
        toast.classList.remove('show'); 
        
        // Esperar a que termine la transición CSS (400ms) antes de borrar el nodo
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 400); 
    }
};