/**El método splice() ayuda a añadir, actualizar, y remover elementos de un arreglo.
 *  Este método puede ser un poco confuso al principio,
 *  pero una vez que  conoces como usarlo apropiadamente, lo harás bien.
 * Para añadir un elemento usando el método splice(), 
 * necesitamos pasar la posición donde queremos añadir,  
 * cuantos elementos a borrar empezando con la posición, y con el elemento a añadir. 
 * */


//En el ejemplo de abajo, estamos añadiendo un elemento zack en el índice  1  sin borrar ningún elemento.

const nombres = ['tom', 'alex', 'bob'];

nombres.splice(1, 0, 'zack');

console.log(nombres); // ["tom", "zack", "alex", "bob"]

