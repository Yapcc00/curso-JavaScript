/**El método fill() llena un arreglo con un valor estático.
 *  Tú puedes cambiar todos los elementos a valores estáticos o cambiar algunos pocos elementos seleccionados.
 *  Nota el método fill() cambia el arreglo original. */


const colors = ['red', 'blue', 'green'];

colors.fill('pink');
console.log(colors); // ["pink", "pink", "pink"]