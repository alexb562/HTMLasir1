// evento date que añade la fecha,día y hora actualizando cada minuto
function actualizarFechaYHora() {
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const año = ahora.getFullYear();
    const hora = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    //usa get + el elemento para mostrar y concatena todo en innerText
    //padStart pone que siempre tenga dos dígitos para tener un formato consistente
    const elemento = document.getElementById('dateTime');
    if (elemento) {
        elemento.innerText = `${dia}/${mes}/${año} ${hora}:${minutos}`
     }
}

actualizarFechaYHora()
//actualiza cada minuto



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
    } //sessionStorage para que no aparezca cada vez que cambiamos entre htmls - tuvimos que buscar eso
}

if (nombre) {
    const nombreMayusculas = nombre.toUpperCase()
    const longitud = nombre.length
    const primerCaracter = nombre.charAt(0)

    console.log(`Nombre: ${nombre}`)
    console.log(`Nombre en mayúscula: ${nombreMayusculas}`)
    console.log(`Longitud: ${longitud}`)
    console.log(`Primer carácter (índice 0): ${primerCaracter}`)
}
//jugamos con el objeto string, poniendo todo en mayúsculas, midiendo el longitud y usando un índice para sacar el primer carácter



// evento mouseout que al salir de una tarjeta de equipo saca una alerta 
document.addEventListener('DOMContentLoaded', function() {
    const aaronCard = document.getElementById("aaron-card");
    if (aaronCard) {
        aaronCard.onmouseout = () => alert("¡Gracias por ver a Aaron!")
     }
 //insertamos un mouseout en las 4 primeras tarjetas con mensajes diferentes
    const alexCard = document.getElementById("alex-card")
    if (alexCard) {
        alexCard.onmouseout = () => alert("¡Alex siempre busca lo mejor para ti!")
    }

    const alexisCard = document.getElementById("alexis-card")
    if (alexisCard) {
        alexisCard.onmouseout = () => alert("¡Alexis te cuida legalmente!")
    }

    const leandroCard = document.getElementById("leandro-card");
    if (leandroCard) 
        leandroCard.onmouseout = () => alert("¡Leandro da vida a cada propiedad!")
     }
)



// botón para cambiar colores de fondo y títulos (usando dom para cambiar elementos css)
let cambioColores = false
const botonCambiar = document.getElementById('cambiar-colores')
//conectamos el botón con el evento
if (botonCambiar) {
    botonCambiar.addEventListener('click', function() {
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
            //seleccionamos los títulos con h1,2,y 3 y cambiamos el fondo también
        }
    })
}


// evento math que saca el precio de la casa más cara en USD en propiedades.html
const nombrePagina = window.location.pathname.split('/').pop()
if (nombrePagina === 'propiedades.html') {
    const precioMaximoEUR = 10900000
    const precioMaximoUSD = Math.round(precioMaximoEUR * 1.08 * 100) / 100
    //formula que usa la tasa de cambio para convertir a USD
    alert(`El precio de la casa más cara en USD es: $${precioMaximoUSD}`)
}




// combinación de ifs que cambia el idioma de la página cuando se seleccione un idioma
const idiomaActual = document.documentElement.lang || "es"

const selectorIdioma = document.getElementById("botonidiomas")
//funcion de botón para reconocer si cambiamos el idioma
if (selectorIdioma) {
    selectorIdioma.addEventListener("change", function() {
        let idiomaElegido = this.value;
        let paginaActual = window.location.pathname.split("/").pop()
        
        if (paginaActual === "" || paginaActual === "/") {
            paginaActual = "index.html"
            //saca el index original en español
        }

        let paginaBase = paginaActual.replace("-en.html", ".html").replace("-de.html", ".html")
        //si no, reemplazamos con las otras 2 páginas en inglés y alemán
        if (idiomaElegido === "es") {
            window.location.href = paginaBase
        } else {
            window.location.href = paginaBase.replace(".html", "-" + idiomaElegido + ".html")
        }
    });
}



// galeria de casas en propediades.html
const enlacesGaleria = document.querySelectorAll('.miniaturas a')
//enlaces para hacer clic en las fotos
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
            //tiene que esconder todas las imágenes primero y luego muestra solo la sobre la que hemos hecho clic
        })
    })
}



// mensaje de bienvenida al cargar la página, sessionStorage guarda el estado de si ya se ha mostrado el mensaje para no mostrarlo de nuevo en la misma sesión
setTimeout(() => {
    if (!sessionStorage.getItem("bienvenida")) {
        let mensaje = "¡Bienvenido a Europa Inmobiliaria! Estamos aquí para ayudarte a encontrar tu hogar."
            if (idiomaActual === "en") mensaje = "Welcome to Europa Inmobiliaria! We are here to help you find your home."
            if (idiomaActual === "de") mensaje = "Willkommen bei Europa Inmobiliaria! Wir sind hier, um Ihnen zu helfen, Ihr Zuhause zu finden."
            //llamamos el estado del botón de idioma
            alert(mensaje)
            sessionStorage.setItem("bienvenida", "true")
    }
}, 2000)
// se muestra el mensaje por 2 segundos



// función a intervalos que se puede parar al hacer clic
const eslogan = document.getElementById("eslogan")
if (eslogan) {
    const esloganes = {
        es: ["¡Vive del estilo europeo!", "Encuentra tu hogar ideal", "Inversiones seguras", "Expertos a tu lado"],
        en: ["Live the European style!", "Find your ideal home", "Safe investments", "Experts by your side"],
        de: ["Erleben Sie den europäischen Stil!", "Finden Sie Ihr ideales Zuhause", "Sichere Investitionen", "Experten an Ihrer Seite"]
        //en cada idioma una lista de los esloganes que van rotando
    }

    //
    const frases = esloganes[idiomaActual]
    let indiceSlogan = 0
    
    const intervaloEslogan = setInterval(() => {
        indiceSlogan++
        if (indiceSlogan >= frases.length) indiceSlogan = 0
        eslogan.textContent = frases[indiceSlogan]
    }, 3000)
    //intervalo de 3 segundos

    eslogan.addEventListener("click", () => {
        clearInterval(intervaloEslogan)
        
        if (idiomaActual === "en") eslogan.textContent = "Live the European style! (Animation paused)"
        else if (idiomaActual === "de") eslogan.textContent = "Erleben Sie den europäischen Stil! (Animation pausiert)"
        else eslogan.textContent = "¡Vive del estilo europeo! (Animación pausada)"
        
        eslogan.style.color = "#396c95"
        eslogan.style.cursor = "default"
    })
    //conectamos click con el event listener para parar la animación 
    
    eslogan.style.cursor = "pointer"
    
}



// validación del formulario que usa expresiónes regex para comprobar tanto el estado de cada caja individualmente como enviar el formulario si todo no está correcto
const formulario = document.getElementById("formulario-contacto")
//llamamos el formulario

if (formulario) {
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{9}$/
        //expresiones regulares que validan los campos
    }

    const camposValidos = {
        nombre: false, 
        email: false, 
        telefono: false,
        poblacion: false, 
        operacion: false, 
        mensaje: false, 
        privacidad: false,
        origen: false
    }
    //campos inicialmente falsos y hay que completar las condiciones para ser true
    
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
    }
    //creamos la función para mostrar el error que le da una clase al input para ponerlo rojo si no cumple con las condiciones

    const quitarError = (idInput) => {
        const input = document.getElementById(idInput)
        input.classList.remove("input-error")
        
        let errorPrevio = input.parentNode.querySelector(".mensaje-error")
        if (errorPrevio) input.parentNode.removeChild(errorPrevio)
    }
//si el input cumple con las condiciones quitamos el error para que no se quede

    const validarCampoTexto = (e) => {
        const id = e.target.id
        const valor = e.target.value

        if (expresiones[id].test(valor)) {
            quitarError(id)
            camposValidos[id] = true
            //si hemos cumplido las conidiciones quitamos el error, else ponemos los mensajes de error
        } else  {
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
            //mensajes para mostrar basado en el idioma seleccionado
            mostrarError(id, msg)
            camposValidos[id] = false
        }
    }

    const validarSelect = () => {
        const pob = document.getElementById("poblacion")
        if (pob.value === "") {
            //si no se ha seleccionado nada ("")
            let msg = "Debes seleccionar una población de la lista."
            if (idiomaActual === "en") msg = "You must select a location from the list."
            if (idiomaActual === "de") msg = "Sie müssen einen Ort aus der Liste auswählen."
            mostrarError("poblacion", msg)
            camposValidos.poblacion = false
        } else {
            quitarError("poblacion")
            camposValidos.poblacion = true
            //si se ha cumplido
        }
    }
    //validar campo individual que es el menu desplegable

    const validarRadios = () => {
        const opciones = document.getElementsByName("operacion")
        //recorremos todos los botones radio
        let seleccionado = false
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) seleccionado = true;
        }
        //recorre los botones y si hay algo seleccionado hemos cumplido la condición
        
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
                //bucle para producir el mensaje de error si no está seleccionado (! significa no)
            }
            camposValidos.operacion = false
        } else {
            if (errorPrevio) errorPrevio.remove();
            camposValidos.operacion = true
            //si no hay mensaje de error señala que la selección es válida
        }
    }


    const validarTextarea = () => {
        const longitudMensaje = document.getElementById("mensaje")
        // seleccionamos el elemento de textarea
        if (longitudMensaje.value.length < 10) {
            //si el mensaje es menor de 10 caracteres, también añadimos los casos para los otros idiomas
            let msg = "El mensaje es muy corto (mínimo 10 caracteres)."
            if (idiomaActual === "en") msg = "The message is too short (min 10 characters)."
            if (idiomaActual === "de") msg = "Die Nachricht ist zu kurz (min 10 Zeichen)."
            mostrarError("mensaje", msg)
            camposValidos.mensaje = false
        } else  {
            quitarError("mensaje")
            camposValidos.mensaje = true
            //si se cumple no hay error
        }
    }

    const validarCheckbox = () => {
        const priv = document.getElementById("privacidad")
        //misma forma que los demás, seleccionamos el checkbox basado en la id
        const divCheck = priv.parentNode
        let error = divCheck.querySelector(".mensaje-error-check")

        if (!priv.checked) {
            //si el checkbox no está marcado sigue la lógica de errores
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
        //misma lógica de no poner error si se cumple la condición
        }
    }

    const validarCheckboxes = () => {
        const opciones = document.getElementsByName("origen")
        let seleccionado = false
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) seleccionado = true
            //usa un bucle para recorrer los checkboxes para ver si hay uno seleccionado
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
        } else  {
            if (errorPrevio) errorPrevio.remove()
            camposValidos.origen = true
        }
    }
    
    const inputNombre = document.getElementById("nombre")
    if (inputNombre) inputNombre.addEventListener("blur", validarCampoTexto)
        //blur se usa para validar el campo cuando el usario sale del input, usando un método dinámico para validar y señalar inmediatamente al usuario 

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
        //ya que hemos validado cada campo en sí tenemos que validar el conjunto de todos para que no se envíe el formulario vacío

        const nombreEl = document.getElementById("nombre")
        if (nombreEl) validarCampoTexto({ target: nombreEl })
             else camposValidos.nombre = false
            //campo nombre

        const emailEl = document.getElementById("email")
        if (emailEl) validarCampoTexto({ target: emailEl }); 
        else camposValidos.email = false
        //campo correo

        const telefonoEl = document.getElementById("telefono")
        if (telefonoEl) validarCampoTexto({ target: telefonoEl })
             else camposValidos.telefono = false;
            //campo teléfono

            validarSelect()
            validarRadios()
            validarTextarea()
            validarCheckbox()
            validarCheckboxes()
        //llamamos el resto de los campos para introducir datos

        if (camposValidos.nombre && camposValidos.email && camposValidos.telefono && 
            camposValidos.poblacion && camposValidos.operacion && 
            camposValidos.mensaje && camposValidos.privacidad && camposValidos.origen) {
                //valida el conjunto de todos lo elementos al mismo tiempo
            
            let exito = "¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto."
            if (idiomaActual === "en") exito = "Form successfully sent! We will contact you soon."
            if (idiomaActual === "de") exito = "Formular erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden."
            
            alert(exito)
            formulario.reset()
            //nos pone una alerta de éxito y resetea el formulario para la próxima vez
            
            for (let clave in camposValidos) {
                camposValidos[clave] = false
            }
        } else {
            let fallo = "Por favor, corrige los errores en rojo antes de enviar."
            if (idiomaActual === "en") fallo = "Please correct the red errors before submitting."
            if (idiomaActual === "de") fallo = "Bitte korrigieren Sie die roten Fehler vor dem Absenden."
            //si hay un campo que no se cumpla, definimos una alerta fallo que nos da un mensaje de error
            
            alert(fallo)
        }
    })
    }

