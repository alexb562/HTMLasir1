// evento date que añade la fecha,día y hora actualizando cada minuto
function actualizarFechaYHora() {
    const fechaActual = new Date()
    const opciones = {
        year: 'numeric',
        month: '2-digit', 
        day: '2-digit',   
        hour: '2-digit',  
        minute: '2-digit', 
        hour12: false     
        //año, mes, etc que usan 2 digitos cada uno y usa el reloj de 24 horas
    };
    const fechaFormateada = fechaActual.toLocaleString('es-ES', opciones)
    const [fecha, hora] = fechaFormateada.split(', ');
    const dateTimeElement = document.getElementById('dateTime')
    if (dateTimeElement) {
        dateTimeElement.innerText = `${fecha} ${hora.split(':')[0]}:${hora.split(':')[1]}`
    }
}

actualizarFechaYHora()




// evento keydown que al pulsar ctrl y / se descarga el tercer documento en index.html
document.addEventListener('keydown', function(event) {
    if (event.key === '/' && event.ctrlKey) {
        const link = document.createElement('a')
        link.href = 'politicacookies.pdf'
        link.download = 'politicacookies.pdf'
        link.click()
            }
})



// Objeto screen que saca información sobre el browser, pantalla etc en la consola
const idioma = navigator.language
const pantalla = `${screen.width}x${screen.height}`
const appName = navigator.appName
const appVersion = navigator.appVersion
const platform = navigator.platform

console.log(`Info del browser: Idioma = ${idioma}, Pantalla = ${pantalla}, Nombre de la aplicación = ${appName}, Versión de la aplicación = ${appVersion}, Plataforma = ${platform}`)

let nombre = sessionStorage.getItem("nombre");

if (!nombre) {
    nombre = prompt("¿Cuál es tu nombre?")
    if (nombre) {
        sessionStorage.setItem("nombre", nombre)
    }
}

if (nombre) {
    const nombreMayuscula = nombre.toUpperCase()
    const longitud = nombre.length
    const primerCaracter = nombre.charAt(0)

    console.log(`Nombre: ${nombre}`)
    console.log(`Nombre en mayúscula: ${nombreMayuscula}`)
    console.log(`Longitud: ${longitud}`)
    console.log(`Primer carácter (índice 0): ${primerCaracter}`)
}

// evento mouseout que al salir de una tarjeta de equipo saca una alerta 
document.addEventListener('DOMContentLoaded', function() {
const aaronCard = document.getElementById("aaron-card")
if (aaronCard) aaronCard.onmouseout = () => alert("¡Gracias por ver a Aaron!")

const alexCard = document.getElementById("alex-card")
if (alexCard) alexCard.onmouseout = () => alert("¡Alex siempre busca lo mejor para ti!")
const alexisCard = document.getElementById("alexis-card");
if (alexisCard) alexisCard.onmouseout = () => alert("¡Alexis te cuida legalmente!")

const leandroCard = document.getElementById("leandro-card")
if (leandroCard) leandroCard.onmouseout = () => alert("¡Leandro da vida a cada propiedad!")



// botón para cambiar colores de fondo y títulos (usando dom para cambiar elementos css)
let cambioColores = false
const changeButton = document.getElementById('cambiar-colores')
if (changeButton) {
    changeButton.addEventListener('click', function() {
        if (!cambioColores) {
            document.body.style.backgroundColor = 'lightblue'
            const titles = document.querySelectorAll('h1, h2, h3')
            titles.forEach(title => title.style.color = 'red')
            cambioColores = true
        } else {
            document.body.style.backgroundColor = '';
            const titles = document.querySelectorAll('h1, h2, h3')
            titles.forEach(title => title.style.color = '')
            cambioColores = false
        }
    })
}



// evento math que saca el precio de la casa más cara en USD en propiedades.html
const nombrePagina = window.location.pathname.split('/').pop()
if (nombrePagina === 'propiedades.html') {
    const precioMaximoEUR = 10900000
    const precioMaximoUSD = Math.round(precioMaximoEUR * 1.08 * 100) / 100;
    const precioFormateadoUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(precioMaximoUSD)
    alert(`El precio de la casa más cara en USD es: ${precioFormateadoUSD}`);
}



// combinación de ifs que cambia el idioma de la página cuando se seleccione un idioma
const idiomaActual = document.documentElement.lang || "es"

const selectorIdioma = document.getElementById("botonidiomas")
if (selectorIdioma) {
    selectorIdioma.addEventListener("change", function() {
        let idiomaElegido = this.value;
        let paginaActual = window.location.pathname.split("/").pop()
        
        if (paginaActual === "" || paginaActual === "/") {
            paginaActual = "index.html"
        }

        let paginaBase = paginaActual.replace("-en.html", ".html").replace("-de.html", ".html")
        if (idiomaElegido === "es") {
            window.location.href = paginaBase
        } else {
            window.location.href = paginaBase.replace(".html", "-" + idiomaElegido + ".html")
        }
    });
}



// galeria de casas en propediades.html
const enlacesGaleria = document.querySelectorAll('.miniaturas a')
if (enlacesGaleria.length > 0) {
    enlacesGaleria.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault()
            
            const todasLasImagenes = document.querySelectorAll('.imagen-grande')
            const todosLosTextos = document.querySelectorAll('.cuadro-texto')
        
            todasLasImagenes.forEach(img => img.style.display = 'none')
            todosLosTextos.forEach(txt => txt.style.display = 'none')
            
            const idDestino = this.getAttribute('href')
            const imagenAMostrar = document.querySelector(idDestino)
            const numeroTexto = idDestino.replace('#img', '')
            const textoAMostrar = document.getElementById('texto' + numeroTexto)
            
            if (imagenAMostrar) imagenAMostrar.style.display = 'block'
            if (textoAMostrar) textoAMostrar.style.display = 'block'
        })
    })
}



// mensaje de bienvenida al cargar la página, sessionStorage guarda el estado de si ya se ha mostrado el mensaje para no mostrarlo de nuevo en la misma sesión
setTimeout(() => {
    if (!sessionStorage.getItem("bienvenida")) {
        let mensaje = "¡Bienvenido a Europa Inmobiliaria! Estamos aquí para ayudarte a encontrar tu hogar."
        if (idiomaActual === "en") mensaje = "Welcome to Europa Inmobiliaria! We are here to help you find your home."
        if (idiomaActual === "de") mensaje = "Willkommen bei Europa Inmobiliaria! Wir sind hier, um Ihnen zu helfen, Ihr Zuhause zu finden."
        
        alert(mensaje)
        sessionStorage.setItem("bienvenida", "true")
    }
}, 2000)



// función a intervalos que se puede parar al hacer clic
const slogan = document.getElementById("slogan")
if (slogan) {
    const esloganes = {
        es: ["¡Vive del estilo europeo!", "Encuentra tu hogar ideal", "Inversiones seguras", "Expertos a tu lado"],
        en: ["Live the European style!", "Find your ideal home", "Safe investments", "Experts by your side"],
        de: ["Erleben Sie den europäischen Stil!", "Finden Sie Ihr ideales Zuhause", "Sichere Investitionen", "Experten an Ihrer Seite"]
    }

    const frases = esloganes[idiomaActual]
    let indiceSlogan = 0
    
    const intervaloEslogan = setInterval(() => {
        indiceSlogan++
        if (indiceSlogan >= frases.length) indiceSlogan = 0
        slogan.textContent = frases[indiceSlogan]
    }, 3000)

    slogan.addEventListener("click", () => {
        clearInterval(intervaloEslogan)
        
        if (idiomaActual === "en") slogan.textContent = "Live the European style! (Animation paused)"
        else if (idiomaActual === "de") slogan.textContent = "Erleben Sie den europäischen Stil! (Animation pausiert)"
        else slogan.textContent = "¡Vive del estilo europeo! (Animación pausada)"
        
        slogan.style.color = "#396c95"
        slogan.style.cursor = "default"
    })
    
    slogan.style.cursor = "pointer"
    
    if (idiomaActual === "en") slogan.title = "Click to pause animation"
    else if (idiomaActual === "de") slogan.title = "Klicken, um die Animation anzuhalten"
    else slogan.title = "Haz clic para pausar la animación"
}



// validación del formulario que usa expresiónes regex para comprobar tanto el estado de cada caja individualmente como enviar el formulario si todo no está correcto
const formulario = document.getElementById("formulario-contacto")

if (formulario) {
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{9}$/
    };

    const camposValidos = {
        nombre: false, 
        email: false, 
        telefono: false,
        poblacion: false, 
        operacion: false, 
        mensaje: false, 
        privacidad: false,
        origen: false
    };
    
    const mostrarError = (idInput, mensaje) => {
        const input = document.getElementById(idInput)
        input.classList.add("input-error")
        
        let errorPrevio = input.parentNode.querySelector(".mensaje-error")
        if (!errorPrevio) {
            const mensajeError = document.createElement("span")
            mensajeError.classList.add("mensaje-error")
            mensajeError.textContent = mensaje
            input.parentNode.appendChild(mensajeError)
        }
    };

    const quitarError = (idInput) => {
        const input = document.getElementById(idInput)
        input.classList.remove("input-error")
        
        let errorPrevio = input.parentNode.querySelector(".mensaje-error")
        if (errorPrevio) input.parentNode.removeChild(errorPrevio)
    };

    const validarCampoTexto = (e) => {
        const id = e.target.id
        const valor = e.target.value

        if (expresiones[id].test(valor)) {
            quitarError(id)
            camposValidos[id] = true
        } else {
            let msg = ""
            if (idiomaActual === "en") {
                if (id === "nombre") msg = "Must contain only letters (min 3)."
                if (id === "email") msg = "Must be a valid email (e.g. name@mail.com)."
                if (id === "telefono") msg = "Must contain exactly 9 numbers."
            } else if (idiomaActual === "de") {
                if (id === "nombre") msg = "Darf nur Buchstaben enthalten (min 3)."
                if (id === "email") msg = "Muss eine gültige E-Mail sein."
                if (id === "telefono") msg = "Muss genau 9 Zahlen enthalten."
            } else {
                if (id === "nombre") msg = "Debe contener solo letras (mínimo 3)."
                if (id === "email") msg = "Debe ser un correo válido (ej: nombre@correo.com).";
                if (id === "telefono") msg = "Debe contener exactamente 9 números."
            }
            mostrarError(id, msg)
            camposValidos[id] = false
        }
    };

    const validarSelect = () => {
        const pob = document.getElementById("poblacion")
        if (pob.value === "") {
            let msg = "Debes seleccionar una población de la lista."
            if (idiomaActual === "en") msg = "You must select a location from the list."
            if (idiomaActual === "de") msg = "Sie müssen einen Ort aus der Liste auswählen.";
            mostrarError("poblacion", msg)
            camposValidos.poblacion = false
        } else {
            quitarError("poblacion")
            camposValidos.poblacion = true
        }
    };

    const validarRadios = () => {
        const opciones = document.getElementsByName("operacion")
        let seleccionado = false
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) seleccionado = true;
        }
        
        const contenedorRadios = document.getElementById("grupo-operacion");
        let errorPrevio = contenedorRadios.parentNode.querySelector(".mensaje-error-radio")
        
        if (!seleccionado) {
            if (!errorPrevio) {
                const msgSpan = document.createElement("span")
                msgSpan.classList.add("mensaje-error-radio")
                let msg = "Debes seleccionar un tipo de operación."
                if (idiomaActual === "en") msg = "You must select an operation type."
                if (idiomaActual === "de") msg = "Sie müssen eine Operationsart auswählen."
                msgSpan.textContent = msg;
                contenedorRadios.parentNode.insertBefore(msgSpan, contenedorRadios.nextSibling);
            }
            camposValidos.operacion = false
        } else {
            if (errorPrevio) errorPrevio.remove();
            camposValidos.operacion = true
        }
    };

    const validarTextarea = () => {
        const msj = document.getElementById("mensaje")
        if (msj.value.length < 10) {
            let msg = "El mensaje es muy corto (mínimo 10 caracteres)."
            if (idiomaActual === "en") msg = "The message is too short (min 10 characters)."
            if (idiomaActual === "de") msg = "Die Nachricht ist zu kurz (min 10 Zeichen)."
            mostrarError("mensaje", msg)
            camposValidos.mensaje = false
        } else {
            quitarError("mensaje")
            camposValidos.mensaje = true
        }
    };

    const validarCheckbox = () => {
        const priv = document.getElementById("privacidad")
        const divCheck = priv.parentNode
        let error = divCheck.querySelector(".mensaje-error-check")

        if (!priv.checked) {
            if (!error) {
                const msgSpan = document.createElement("span")
                msgSpan.classList.add("mensaje-error-check")
                let msg = "Debes aceptar la política de privacidad."
                if (idiomaActual === "en") msg = "You must accept the privacy policy."
                if (idiomaActual === "de") msg = "Sie müssen die Datenschutzrichtlinie akzeptieren."
                msgSpan.textContent = msg
                divCheck.appendChild(msgSpan)
            }
            camposValidos.privacidad = false
        } else {
            if (error) error.remove()
            camposValidos.privacidad = true
        }
    }

    const validarCheckboxes = () => {
        const opciones = document.getElementsByName("origen")
        let seleccionado = false
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) seleccionado = true
        }
        
        const contenedorCheckboxes = document.getElementById("grupo-origen")
        let errorPrevio = contenedorCheckboxes.querySelector(".mensaje-error-check")
        
        if (!seleccionado) {
            if (!errorPrevio) {
                const msgSpan = document.createElement("span")
                msgSpan.classList.add("mensaje-error-check")
                let msg = "Debes seleccionar al menos una opción."
                if (idiomaActual === "en") msg = "You must select at least one option.";
                if (idiomaActual === "de") msg = "Sie müssen mindestens eine Option auswählen."
                msgSpan.textContent = msg
                contenedorCheckboxes.appendChild(msgSpan)
            }
            camposValidos.origen = false
        } else {
            if (errorPrevio) errorPrevio.remove()
            camposValidos.origen = true
        }
    };
    
    const inputNombre = document.getElementById("nombre")
    if (inputNombre) inputNombre.addEventListener("blur", validarCampoTexto)

    const inputEmail = document.getElementById("email")
    if (inputEmail) inputEmail.addEventListener("blur", validarCampoTexto)

    const inputTelefono = document.getElementById("telefono")
    if (inputTelefono) inputTelefono.addEventListener("blur", validarCampoTexto)

    const selectPoblacion = document.getElementById("poblacion")
    if (selectPoblacion) selectPoblacion.addEventListener("change", validarSelect)

    const textareaMensaje = document.getElementById("mensaje")
    if (textareaMensaje) textareaMensaje.addEventListener("blur", validarTextarea)

    const checkboxPriv = document.getElementById("privacidad")
    if (checkboxPriv) checkboxPriv.addEventListener("change", validarCheckbox)
    
    const radios = document.getElementsByName("operacion")
    if (radios && radios.length) Array.from(radios).forEach(radio => radio.addEventListener("change", validarRadios))
    
    const checkboxes = document.getElementsByName("origen")
    if (checkboxes && checkboxes.length) Array.from(checkboxes).forEach(checkbox => checkbox.addEventListener("change", validarCheckboxes))
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()

        const nombreEl = document.getElementById("nombre")
        if (nombreEl) validarCampoTexto({ target: nombreEl })
             else camposValidos.nombre = false;

        const emailEl = document.getElementById("email")
        if (emailEl) validarCampoTexto({ target: emailEl }); 
        else camposValidos.email = false

        const telefonoEl = document.getElementById("telefono")
        if (telefonoEl) validarCampoTexto({ target: telefonoEl })
             else camposValidos.telefono = false;

        validarSelect()
        validarRadios()
        validarTextarea()
        validarCheckbox()
        validarCheckboxes()

        if (camposValidos.nombre && camposValidos.email && camposValidos.telefono && 
            camposValidos.poblacion && camposValidos.operacion && 
            camposValidos.mensaje && camposValidos.privacidad && camposValidos.origen) {
            
            let exito = "¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto."
            if (idiomaActual === "en") exito = "Form successfully sent! We will contact you soon."
            if (idiomaActual === "de") exito = "Formular erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden."
            
            alert(exito)
            formulario.reset()
            
            for (let clave in camposValidos) {
                camposValidos[clave] = false
            }
        } else {
            let fallo = "Por favor, corrige los errores en rojo antes de enviar."
            if (idiomaActual === "en") fallo = "Please correct the red errors before submitting."
            if (idiomaActual === "de") fallo = "Bitte korrigieren Sie die roten Fehler vor dem Absenden."
            
            alert(fallo)
        }
    })
    }

})