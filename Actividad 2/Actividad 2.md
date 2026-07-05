<div align="center">

### Librería Frontend de Validación y Utilería Nativa

*Funciones puras en Vanilla JavaScript — sin frameworks, sin dependencias*

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Estado-Completado-success?style=for-the-badge)
![License](https://img.shields.io/badge/Uso-Académico-blue?style=for-the-badge)

</div>

---

##  Información del Proyecto

| Campo | Detalle |
|---|---|
|  **Estudiante** | Gonzalez Valentin Adrian |
|  **Docente** | Martinez Nieto Adelina |
|  **Grupo** | Programación Web - 7SC |
|  **Actividad** | Ejercicio 2 - Librería de utilería funcional |
|  **Fecha** | 04 de Julio 2026 |

---

##  ¿Qué problema resuelve?

Cuando desarrollamos aplicaciones web, la validación de datos en el cliente suele volverse repetitiva, propensa a errores de formato y dependiente de frameworks pesados que ralentizan la carga del sitio.

Esta es una librería funcional micro (Vanilla JS) diseñada para resolver este problema. Ofrece un conjunto de funciones puras e independientes que separan por completo la lógica de negocio de la interfaz visual, permitiendo:

-  **Garantizar la seguridad y el formato estricto** en accesos (Login) y registros mediante el análisis de patrones complejos (Password robusto, Correo, Longitudes).
-  **Normalizar la experiencia de usuario (UX)** transformando textos desordenados y formateando datos financieros de manera automática antes de enviarlos a una base de datos o API.
-  **Manejar lógica de negocio común** como el cálculo exacto de edades y restricciones de mayoría de edad utilizando únicamente el motor de tiempo nativo de JavaScript.

---

##  Instalación

Para utilizar esta librería en cualquier proyecto web, simplemente descarga el archivo `actividad2.js` y vincúlalo mediante una etiqueta clásica de script en la sección final del `<body>` de tu archivo HTML:

```html
<script src="actividad2.js"></script>
```

---

##  Uso con Ejemplos de Código

### 1️ Validación de Correo Electrónico
Comprueba si una cadena cumple estrictamente con la estructura estándar de un email mediante expresiones regulares.

```javascript
const correoValido = validarCorreo("usuario@correo.com");   // true
const correoInvalido = validarCorreo("usuario@correo");     // false
```

### 2️ Filtro de Solo Letras
Permite únicamente caracteres alfabéticos de la A a la Z, incluyendo espacios, vocales acentuadas y eñes (mayúsculas y minúsculas).

```javascript
const nombreOk = soloLetras("María José Núñez");   // true
const nombreError = soloLetras("Juan123");         // false
```

### 3️ Validación de Longitud Numérica
Verifica que un número (o ID) convertido a texto no supere un límite máximo de dígitos establecido y que no se encuentre vacío.

```javascript
const idCorrecto = validarLongitud(992831, 10);        // true  (6 dígitos ≤ 10)
const idExcedido = validarLongitud(12345678901, 10);   // false (11 dígitos)
```

### 4️ Cálculo de Edad
Retorna los años cumplidos exactos del usuario, restando la fecha actual del sistema de la fecha de nacimiento provista en formato `AAAA-MM-DD`.

```javascript
// Suponiendo el año en curso (2026)
const edad = calcularEdad("2000-05-15");   // 26 (entero)
```

### 5️ Verificación de Mayoría de Edad
Retorna un valor booleano determinando si la persona tiene 18 años o más a partir de su fecha de nacimiento.

```javascript
const esMenor = esMayorDeEdad("2012-08-20");   // false
const esAdulto = esMayorDeEdad("1995-03-10");  // true
```

### 6️ Validación de Contraseña Robusta
Exige requerimientos mínimos de seguridad para proteger cuentas: al menos una letra mayúscula, una minúscula, un número, un carácter especial (`$@$!%*?&`) y un largo mínimo de 8 caracteres.

```javascript
const passSegura = validarPassword("Admin2026!");   // true
const passDebil = validarPassword("123456");        // false
```

### 7️ Formateo de Moneda *(Función de invención adicional)*
Transforma cualquier número flotante o entero a un string estructurado bajo el formato internacional de divisa localizado (`Intl.NumberFormat`).

```javascript
const precioDolares = formatearMoneda(1500.50, 'USD');   // "$1,500.50"
const precioPesos = formatearMoneda(500, 'MXN');         // "$500.00"
```

### 8️ Capitalización de Texto *(Función de invención adicional)*
Limpia espacios basura en los extremos y convierte un bloque de texto desordenado o mal escrito a un formato limpio de "Nombre Propio".

```javascript
const nombreLimpio = capitalizarTexto("   aLeXAnDeR pÉrEz   ");   // "Alexander Pérez"
```

---

##  Resultados

A continuación se evidencian las pruebas de caja blanca realizadas directamente en la consola del navegador para comprobar la pureza de las funciones:

<div align="center">
<img width="681" height="692" alt="Pruebas de consola 1" src="https://github.com/user-attachments/assets/957147f1-5a2c-4549-bd76-bf8684f85c16" />
<br><br>
<img width="692" height="216" alt="Pruebas de consola 2" src="https://github.com/user-attachments/assets/0a732840-a4fe-4603-ba4d-c10601eb4902" />
</div>

###  Análisis de resultados

| Categoría | Pruebas | Resultado |
|---|---|---|
|  **Filtros de Seguridad** | 1, 2, 3, 6 | Retornan correctamente valores booleanos (`true`/`false`), demostrando que las expresiones regulares procesan los datos y bloquean formatos inválidos. |
|  **Manejo de Tiempo** | 4, 5 | El cálculo matemático a partir de fechas arroja edades exactas y restringe accesos de manera precisa. |
|  **Mejora de UX** | 7, 8 | Los datos crudos ingresados son transformados con éxito a formatos limpios para la interfaz visual (texto en modo "Título" y números convertidos a divisa `MXN`). |

---
##Link del Video.
https://youtu.be/Xp6wH_N57Zs
---

<div align="center">

**Programación Web — 7SC**
https://youtu.be/Xp6wH_N57Zs
</div>
