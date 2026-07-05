<div align="center">

#  Componentes Visuales Interactivos

*Librería de notificaciones emergentes dinámicas — sin frameworks, sin dependencias*

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Estilos_Nativos-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Estado-Completado-success?style=for-the-badge)
![License](https://img.shields.io/badge/Uso-Académico-blue?style=for-the-badge)

</div>

---

##  Información del Proyecto

| Campo | Detalle |
|---|---|
| **Estudiante** | Gonzalez Valentin Adrian |
| **Docente** | Martinez Nieto Adelina |
| **Grupo** | Programación Web - 7SC |
| **Actividad** | Ejercicio 3 - Componentes Visuales Interactivos |
| **Fecha** | 05 de Julio 2026 |

---

##  ¿Qué problema resuelve?

Las alertas nativas del navegador (`alert()`) bloquean la interacción del usuario y rompen la estética visual de las aplicaciones modernas. Además, utilizar frameworks pesados (como React o Vue) únicamente para crear notificaciones resulta excesivo para proyectos de menor escala.

**ToastUI** es una librería creada en **Vanilla JS** y **CSS puro** diseñada para resolver este problema. Ofrece un componente visual (Notificación Toast) que se genera dinámicamente y permite:

- **Mejorar la Experiencia de Usuario (UX):** Notificaciones no intrusivas que aparecen y desaparecen automáticamente sin bloquear la pantalla.
- **Alta Reutilización:** Un único componente que puede llamarse desde cualquier parte del código con distintos colores y textos.
- **Diseño Adaptativo (Responsive):** Las notificaciones se adaptan al tamaño de la pantalla, garantizando que no haya desbordamiento horizontal en dispositivos móviles.

---

##  Instalación

Para utilizar esta librería, necesitas incluir tanto la hoja de estilos como el script en tu archivo HTML. No requiere escribir contenedores previos, la librería genera el HTML dinámicamente.

```html
<head>
    <link rel="stylesheet" href="actividad3.css">
</head>
<body>
    <script src="actividad3.js"></script>
</body>
```
---

## Uso con Ejmplos del Código.
1 **Notificación con extito.**

Ideal para confirmar que una acción (como guardar un formulario o registro) se completó correctamente, es de color verde.
```html
ToastUI.show({
    message: "¡Perfil de usuario actualizado correctamente!",
    type: "success",
    duration: 4000
});
```
2 **Notificación de Error (error)**

Utilizado para informar al usuario sobre fallos, como validaciones incorrectas o campos vacíos, es de color rojo.
```html
ToastUI.show({
    message: "Error: Todos los campos del formulario son obligatorios.",
    type: "error",
    duration: 5000
});
```
3 **Notificación Informativa (info)**

Mensajes neutrales del sistema, como la recepción de nuevos mensajes es de color azul.
```html
ToastUI.show({
    message: "Tienes 1 mensaje nuevo de Soporte Técnico.",
    type: "info",
    duration: 3500
});
```

4 **Notificación de Advertencia (warning)**

Llama la atención del usuario antes de que ocurra un error (ej. expiración de sesión), es de color amarillo.
```html
ToastUI.show({
    message: "Advertencia: Tu sesión expirará en 2 minutos.",
    type: "warning",
    duration: 6000
});
```
---

## Resultados.
**1. Estado de Error (`toast-error`)**

<img width="1918" height="873" alt="image" src="https://github.com/user-attachments/assets/882dc4f0-a634-4324-bb6b-f9ec80487c52" />

Generado dinámicamente al intentar enviar el formulario con campos vacíos. Interrumpe el flujo y alerta al usuario sobre la validación fallida en tiempo real.

**2. Estado de Éxito y Diseño Adaptativo (`toast-success`)**
<img width="1918" height="863" alt="image" src="https://github.com/user-attachments/assets/d3c03cc1-19d7-4218-990f-1e3e79f7810e" />

Confirma la correcta captura de datos. Esta captura en vista móvil (iPhone/Android) evidencia cómo el componente se adapta al 100% del ancho de la pantalla sin generar desbordamiento horizontal.


**3. Estado Informativo (`toast-info`)**
<img width="1918" height="865" alt="image" src="https://github.com/user-attachments/assets/d1a787a5-c68a-4103-8d9b-bed535e6e85b" />

Simulación de un evento externo al formulario (ej. nuevo mensaje de soporte). Demuestra la flexibilidad de la librería para conectarse a cualquier botón o proceso de la interfaz.

**4. Estado de Advertencia (`toast-warning`)**
<img width="1918" height="866" alt="image" src="https://github.com/user-attachments/assets/4459c26d-8cc0-472c-90e5-6a23ddc1db3e" />

Prevención de acciones críticas, como la expiración de la sesión. Para este caso de uso, se parametrizó la función para que el componente dure más tiempo en pantalla antes de desaparecer.

---

## Link del Video.

