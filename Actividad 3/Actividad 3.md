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

## Uso con Ejmplos del Código.
1 **Notificación con extito.**

Ideal para confirmar que una acción (como guardar un formulario o registro) se completó correctamente. Color verde.
```html
ToastUI.show({
    message: "¡Perfil de usuario actualizado correctamente!",
    type: "success",
    duration: 4000
});
```


