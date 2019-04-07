# Paint
Este proyecto consiste en crear un clon de Paint utilizando p5.js, que permita como mínimo modificar el color y grosor del pincel.
El resultado de la práctica es una aplicación que nos permite pintar sobre un fondo, ofreciéndonos la opción de elegir el color con el que deseamos pintar y el grosor del pincel, así como el color del fondo/lienzo sobre el que se pinta.
## Código
En el código tenemos cinco métodos principales:
### paintPoint()
Se encarga de pintar un punto en el lienzo.
### storePoint()
Se encarga de almacenar en una lista cada uno de los puntos que creamos, para poder dibujarlos en cualquier momento.
### clean()
Vuelve al estado inicial de la aplicación.
### paintBackground()
cambia el color del lienzo al color seleccionado.
### paintPoints()
Pinta lo spuntos almacenados en la lista sobre el lienzo.
## Controles
En este caso podemos interactuar con la aplicación de dos formas:
* A través del teclado
* A través del ratón
### Teclado
A través del teclado podemos:
* Cambiar el tamaño del pincel. Para ello utilizamos las teclas “+” para aumentar y “-” para disminuir.
* Resetear la aplicación al estado inicial, utilizando el método clean() anteriormente nombrado. Para ello utilizamos la tecla “c”.
* Cambiar el color del lienzo. Para ello pulsamos la tecla “b”, tras ello el color del lienzo cambiará al definido por el selector de color.
### Ratón
A través del ratón podemos:
* Dibujar en el lienzo. Para ello debe hacer click con el ratón en la posición en la que queremos dibujar, o bien mantener el botón izquierdo pulsado y mover el ratón para dibujar varios puntos.
* Seleccionar el color con el que vamos a pintar, o que vamos a poner al fondo. Para ello debemos clicar en el selector de color que se encuentra abajo a la izquierda del lienzo, esto abrirá una ventana que nos permitirá seleccionar un color. Una vez allí seleccionamos el color y le damos a aceptar.
## Tecnologías
Para la realización de esta práctica se ha hecho uso del editor online https://editor.p5js.org.

