/** mouseover: Se dispara cuando el puntero del mouse se mueve sobre un elemento.
 *  Puedes usarlo para mostrar información adicional cuando el usuario pasa el mouse sobre un elemento.*/


document.getElementById('myImage').addEventListener('mouseover', function () {
    this.src = 'imagen-hover.jpg';
});


//En este ejemplo, cuando el usuario pasa el mouse sobre una imagen con el 
//ID "myImage", la imagen cambia a una imagen con efecto hover.