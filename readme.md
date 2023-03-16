Trabajo práctico de digital house: sessions, cookies y express validator

modo de uso:

    -clonar el repositorio
    
    -desde la raiz ejecutar en una terminal npm i, para instalar las dependencias de express

    -en la terminal ejecutar nodemon o node src/app.js

descripcion:trabajo práctico en el que se veran conceptos como sesiones, validaciones con express validator y cookies para persistencia de sesiones

    desafio 1:
    base del proyecto
        -un formulario funcional ( label, input, submit)
        
        -al ingresar los datos se redirecciona a la misma pagina y muestra los datos
        
        -validado con express validator
            -todos los campos son requeridos, en caso de estar vacios mostrar el mensaje correspondiente
            -en caso de edad, si no es un numero mostrara un error
    
    desafio 2:
    modificaciones de estilos
            -cuando se haga envie el formulario, debera cambiar el fondo por el color elegido
            
            -crear otra vista donde se aplique el cambio del background segun el usuario y se visualice el mensaje
                -"nombre", gracias por visitarnos 

    desafio 3:
    modificacion del formulario:
            -agregar un checkbox que diga "recordar color" y que si el visitante tilda este checkbox el color elegido persista cuando se cierre y abra el navegador
            -implementar un boton que funcione para "olvidar el color" y lo vuelva a su estado inicial