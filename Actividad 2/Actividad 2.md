# JS-Utils: Librería Frontend de Validación y Utilería Nativa

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
const esMayor = esMayorDeEdad("2012-08-20"); 
const esAdulto = esMayorDeEdad("1995-03-10"); 
```

6. **Validación de Contraseña Robusta**
Exige requerimientos mínimos de seguridad para proteger cuentas: al menos una letra mayúscula, una minúscula, un número, un carácter especial ($@$!%*?&) y un largo mínimo de 8 caracteres.
```html
const passSegura = validarPassword("Admin2026!"); 
const passDebil = validarPassword("123456");     
```

7. **Formateo de Moneda (Función de Invención Adicional 1)**
Transforma cualquier número flotante o entero a un string estructurado bajo el formato internacional de divisa localizado (`Intl.NumberFormat`).
```html
const precioDolares = formatearMoneda(1500.50, 'USD'); 
const precioPesos = formatearMoneda(500, 'MXN');
```

8. **Capitalización de Texto (Función de Invención Adicional 2)**
Limpia espacios basura en los extremos y convierte un bloque de texto desordenado o mal escrito a un formato limpio de "Nombre Propio".
```html
const nombreLimpio = capitalizarTexto("   aLeXAnDeR pÉrEz   ");
```

---
##  Resultados
A continuación se evidencian las pruebas de caja blanca realizadas directamente en la consola del navegador para comprobar la pureza de las funciones:

<img width="681" height="692" alt="image" src="https://github.com/user-attachments/assets/957147f1-5a2c-4549-bd76-bf8684f85c16" />
<img width="692" height="216" alt="image" src="https://github.com/user-attachments/assets/0a732840-a4fe-4603-ba4d-c10601eb4902" />
**Filtros de Seguridad (Pruebas 1, 2, 3 y 6):** Retornan correctamente valores booleanos (`true`/`false`), demostrando que las expresiones regulares procesan los datos y bloquean formatos inválidos.
* **Manejo de Tiempo (Pruebas 4 y 5):** El cálculo matemático a partir de fechas arroja edades exactas y restringe accesos de manera precisa.
* **Mejora de UX (Pruebas 7 y 8):** Los datos crudos ingresados son transformados con éxito a formatos limpios para la interfaz visual (texto en modo "Título" y números convertidos a divisa `MXN`).

---
