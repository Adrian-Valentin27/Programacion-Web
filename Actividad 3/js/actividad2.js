function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    const strNum = String(numero).trim();
    return strNum.length <= maxLongitud && strNum.length > 0;
}

function calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) return 0;
    const hoy = new Date();
    const cumpleanos = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const mes = hoy.getMonth() - cumpleanos.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    return regex.test(password);
}

function formatearMoneda(numero, codigoDivisa = 'USD') {
    const num = parseFloat(numero);
    if (isNaN(num)) return "$0.00";
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: codigoDivisa
    }).format(num);
}

function capitalizarTexto(texto) {
    if (!texto) return "";
    return texto
        .trim()
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}

const modal = document.getElementById("miModal");
const btnAbrir = document.getElementById("btnAbrirModal");
const btnCerrar = document.querySelector(".close-btn");
const btnAceptar = document.getElementById("btnAceptarModal");

btnAbrir.addEventListener("click", () => modal.style.display = "block");
btnCerrar.addEventListener("click", () => modal.style.display = "none");
btnAceptar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const correoLogin = document.getElementById("loginCorreo").value;
    const passLogin = document.getElementById("loginPassword").value;

    if (!validarCorreo(correoLogin)) {
        alert("El formato del correo electrónico en el Login no es válido.");
        return;
    }

    if (!validarPassword(passLogin)) {
        alert("Contraseña de Login inválida.");
        return;
    }

    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioSimulado"));

    if (!usuarioRegistrado) {
        alert("No hay ningún usuario registrado en el sistema. Por favor, crea una cuenta abajo.");
        return;
    }

    if (usuarioRegistrado.correo !== correoLogin || usuarioRegistrado.password !== passLogin) {
        alert("Error: El correo o la contraseña no coinciden con los datos registrados.");
        return;
    }

    alert(`¡Login Exitoso! Bienvenido de nuevo, ${usuarioRegistrado.nombre}.`);
});

// Registro
document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let nombreInput = document.getElementById("regNombre");
    const identificacion = document.getElementById("regId").value;
    const fechaNac = document.getElementById("regFechaNac").value;
    const correoRegistro = document.getElementById("regCorreo").value; 
    const passwordRegistro = document.getElementById("regPassword").value; 
    
    const edadTexto = document.getElementById("edadResultado");
    const mensajeExito = document.getElementById("mensajeExito");

    // Ocultar mensaje previo si existe
    mensajeExito.style.display = "none";

    if (!soloLetras(nombreInput.value)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }

    if (!validarLongitud(identificacion, 10)) {
        alert("La identificación no puede superar los 10 dígitos.");
        return;
    }

    const edadCalculada = calcularEdad(fechaNac);
    if (!esMayorDeEdad(fechaNac)) {
        alert("Lo sentimos, debes ser mayor de edad (18 años) para registrarte.");
        return;
    }

    if (!validarCorreo(correoRegistro)) {
        alert("El formato del correo de registro no es válido.");
        return;
    }

    if (!validarPassword(passwordRegistro)) {
        alert("La contraseña de registro debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
        return;
    }

    // Funciones
    nombreInput.value = capitalizarTexto(nombreInput.value);
    const cuotaSimulada = formatearMoneda(500, 'MXN'); 

    const nuevoUsuario = {
        nombre: nombreInput.value,
        correo: correoRegistro,
        password: passwordRegistro,
        identificacion: identificacion,
        edad: edadCalculada
    };
    localStorage.setItem("usuarioSimulado", JSON.stringify(nuevoUsuario));

    // Impresion de la pantalla
    edadTexto.textContent = `Edad calculada: ${edadCalculada} años.`;
    
    mensajeExito.style.display = "block";
    mensajeExito.innerHTML = `¡Registro completado, ${nombreInput.value}!<br>Tu cuota de inscripción es de: <strong>${cuotaSimulada}</strong>.`;
    
    alert(`Registro exitoso. Revisa tu cuota en la pantalla y procede a Iniciar Sesión.`);
});