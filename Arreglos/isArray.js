/**Tú puedes determinar si un valor es un arreglo usando el método Array.isArray(value).
 *  El método regresa verdadero si el valor que pasa es un arreglo */


Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // returns true
Array.isArray('🍅'); // returns false
Array.isArray({ 'tomate': '🍅' }); // returns false
Array.isArray([]); // returns true