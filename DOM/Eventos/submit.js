/** Se desencadena cuando se envía un formulario. Puedes utilizarlo para validar 
 * los datos ingresados en un formulario antes de enviarlos al servidor. */


document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
    console.log('El formulario se ha enviado');
});


/**En este ejemplo, cuando el usuario envía un formulario con el ID "myForm", 
 * se evita que el formulario se envíe y se muestra un mensaje en la consola.

Recuerda que estos son solo ejemplos básicos de cómo utilizar los eventos del DOM. 
Puedes adaptarlos y personalizarlos según tus necesidades y requerimientos específicos.

Espero que estos ejemplos te den una idea de
 cómo puedes utilizar los eventos del DOM en tu código.
 Si tienes más preguntas, no dudes en hacerlas.
 */