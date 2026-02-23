# Mejoras 
- Creado una página html para cada seccion - propiedades, equipo, etc que se ve cómo una barra de selecciones

- Ampliado el numero de miembros de equipo usando mas entradas en el formato grid

- Boton para subir arriba en cualquier momento

- Cambiado el error en la página de casas que al tocar causó bajar demasiado y que no se mostraba parte del título y descripción (insertar un preventDefault)



# Función con intervalos
- En cada página en la cabecera se ha añadido una función timeout con 3 mensajes que van rotando y al hacer clic se pausa (una función con intervalos que se puede cancelar)


# Eventos
- Definimos en los documentos legales un evento onclick con diferentes resultados en cada uno. El primer documento se abre en una nueva pestaña. El segundo se abre con una ventana de tamaño diferente

- Un evento mouseover que saca una alerta cada vez que se ponga el ratón sobre el tercer documento

- Un evento keydown que al pulsar cntrl + / en el teclado se abre el tercer documento

- Un evento onload que saca el idioma y tamaño de la pantalla en la consola

- Un evento onmouseout que al salir de las tarjetas de los miembros del equipo pone una alerta


# Objetos
- Objeto string al cargar la página - pide el nombre y guarda el nombre en mayúsculas, la longitud, y el primer carácter usando índice

- Objeto math - da una alerta que calcula el precio de la casa más cara (calle del camino alto) en USD usando la conversión 1.08

- Objeto fecha - incluye la fecha actual hasta el minuto

-Objeto screen - al cargar la consola saca información sobre el navegador como appversion, platform etc


# Otros JS
- Botón de idiomas - ahora interactivo usando indices para cambiar el idioma de la página
    - en cada mensaje o error que sale (por ejemplo, errores en no rellenar todos los campos en el formulario) ponemos una condición if que cambia el idioma del mensaje si una cierta paǵina está seleccionada

- Alerta al entrar la página con un mensaje de bienvenida

- Un sistema modal para abrir una ventana dentro de una tarjeta flex

# Formulario y validación
- Implementado comprobacion de campos que se ponen en rojo con un mensaje de error. Al enviar un formulario que sea menos de 10 caracteres o vacio se da un error

- Añadido un campo checkbox de "cómo has oído de nosotros" que integra un la validación general del formulario

