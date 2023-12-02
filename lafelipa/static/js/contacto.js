window.addEventListener("pageshow", () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("message").value = "";
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("telefonoError").textContent = "";
    document.getElementById("consultaError").textContent = "";
});

document.getElementById("name").addEventListener("input", () => {
    document.getElementById("nameError").textContent = "";
});

document.getElementById("email").addEventListener("input", () => {
    document.getElementById("emailError").textContent = "";
});

document.getElementById("telefono").addEventListener("input", () => {
    document.getElementById("telefonoError").textContent = "";
});

document.getElementById("message").addEventListener("input", () => {
    document.getElementById("consultaError").textContent = "";
});

function validarNombre(name) {
    const nameError = document.getElementById("nameError");

    if (name === "") {
        nameError.textContent = "Por favor, introduce tu nombre";
        return false;
    }

    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
        nameError.textContent = "Por favor, introduce un nombre válido. Solo se permiten letras y espacios.";
        return false;
    }

    if (name.length < 2 || name.length > 35) {
        nameError.textContent = "Por favor, introduce un nombre válido. Debe tener entre 2 y 35 caracteres.";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validarEmail(email) {
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    email = email.trim();

    if (email === "") {
        emailError.textContent = "Por favor, introduce tu correo electrónico";
        return false;
    }

    if (email.length > 254) {
        emailError.textContent = "Por favor, introduce un correo electrónico válido. No debe tener más de 254 caracteres.";
        return false;
    }

    if (!emailRegex.test(email)) {
        emailError.textContent = "Por favor, introduce un correo electrónico válido";
        return false;
    }
    emailError.textContent = "";
    return true;
}

function validarTelefono(telefono) {
    const telefonoError = document.getElementById("telefonoError");
    const telefonoRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    telefono = telefono.trim();

    if (telefono === "") {
        telefonoError.textContent = "Por favor, introduce tu número de teléfono";
        return false;
    }

    if (!telefonoRegex.test(telefono)) {
        telefonoError.textContent = "Por favor, introduce un número de teléfono válido";
        return false;
    }

    telefonoError.textContent = "";
    return true;
}

function validarConsulta(consulta) {
    const consultaError = document.getElementById("consultaError");
    
    if (consulta === "") {
        consultaError.textContent = "Por favor, introduce tu consulta";
        return false;
    }

    if (consulta.length < 10 || consulta.length > 500) {
        consultaError.textContent = "Por favor, introduce una consulta válida. Debe tener entre 10 y 500 caracteres.";
        return false;
    }

    consultaError.textContent = "";
    return true;
}

function validarFormulario(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const consulta = document.getElementById("message").value.trim();

    if (!validarNombre(name) || !validarEmail(email) || !validarTelefono(telefono) || !validarConsulta(consulta)) {
        event.preventDefault();
        return false;
    }

    return true;
}

const submitBtn = document.querySelector(".enviar");
submitBtn.addEventListener("click", validarFormulario);
