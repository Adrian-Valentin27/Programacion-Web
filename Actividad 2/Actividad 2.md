# 🚀 JS-Utils: Librería Frontend de Validación y Utilería Nativa

| Información del Proyecto | |
|---|---|
| **Estudiante:** | Gonzalez Valentin Adrian |
| **Docente:** | Martinez Nieto Adelina |
| **Grupo:** |Programación Web - 7SC |
| **Actividad:** | Ejercicio 2 - Librería de utilería funcional |
| **Fecha:** | 04 de Julio 2026 |

---

##  ¿Qué problema resuelve?

Cuando desarrollamos aplicaciones web, la validación de datos en el cliente suele volverse repetitiva, propensa a errores de formato y dependiente de frameworks pesados que ralentizan la carga del sitio. 

**JS-Utils** es una librería funcional micro (Vanilla JS) diseñada para resolver este problema. Ofrece un conjunto de funciones puras e independientes que separan por completo la lógica de negocio de la interfaz visual, permitiendo:

1. **Garantizar la seguridad y el formato estricto** en accesos (Login) y registros mediante el análisis de patrones complejos (Password robusto, Correo, Longitudes).
2. **Normalizar la experiencia de usuario (UX)** transformando textos desordenados y formateando datos financieros de manera automática antes de enviarlos a una base de datos o API.
3. **Manejar lógica de negocio común** como el cálculo exacto de edades y restricciones de mayoría de edad utilizando únicamente el motor de tiempo nativo de JavaScript.

---

##  Instalación

Para utilizar esta librería en cualquier proyecto web, simplemente descarga el archivo `actividad2.js` y vincúlalo mediante una etiqueta clásica de script en la sección final del `<body>` de tu archivo HTML:

```html
<script src="actividad2.js"></script>
```

## Uso con Ejemplos de Código Embebido
1. **Validación de Correo electrónico**
Comprueba si una cadena cumple estrictamente con la estructura estándar de un email mediante expresiones regulares.
```html
const correoValido = validarCorreo("usuario@correo.com");
```
```html
const correoInvalido = validarCorreo("usuario@correo");
```

3. **Filtro de Solo Letras**
Permite únicamente caracteres alfabéticos de la A a la Z, incluyendo espacios y vocales acentuadas o eñes (tanto mayúsculas como minúsculas).
```html
const nombreOk = soloLetras("María José Núñez");
``` 
```html
const nombreError = soloLetras("Juan123");
```       

3. **Validación de Longitud Numérica**
Verifica que un número (o ID) convertido a texto no supere un límite máximo de dígitos establecidos y que no se encuentre vacío.
```html
const idCorrecto = validarLongitud(992831, 10);
```
Devuelve: true (6 dígitos es <= 10)
```html
const idExcedido = validarLongitud(12345678901, 10);
```
Devuelve: false (11 dígitos)

4. **Cálculo de Edad
Retorna los años cumplidos exactos del usuario restando la fecha actual del sistema de la fecha de nacimiento provista en formato `AAAA-MM-DD`.
Suponiendo el año en curso (2026)
```html
const edad = calcularEdad("2000-05-15");
```
Devuelve: 26 (entero)

5. **Verificación de Mayoría de Edad**
Retorna un valor booleano determinando si la persona tiene 18 años o más a partir de su fecha de nacimiento.
```html
const esMayor = esMayorDeEdad("2012-08-20"); // Devuelve: false
const esAdulto = esMayorDeEdad("1995-03-10"); // Devuelve: true
```
