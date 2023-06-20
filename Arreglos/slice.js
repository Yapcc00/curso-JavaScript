/**Tu puedes copiar y clonar un arreglo a un nuevo arreglo usando el metodo slice(). Vea que el método slice() no cambia el arreglo original. 
 * En cambio crea una nueva copia superficial del arreglo original. */


const ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const ensaladaCopy = ensalada.slice();

console.log(ensaladaCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

ensalada === ensaladaCopy; // returns false