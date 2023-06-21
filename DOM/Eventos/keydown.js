/**Ocurre cuando se presiona una tecla en el teclado. Puedes utilizarlo para realizar acciones
 *  específicas cuando el usuario presiona una tecla en un campo de entrada de texto, por ejemplo. */

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log('Presionaste la tecla Enter');
    }
});

//Aquí, se agrega un evento keydown al documento. Si el usuario
// presiona la tecla Enter, se muestra un mensaje en la consola.