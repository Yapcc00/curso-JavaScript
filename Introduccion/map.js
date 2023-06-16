var articulos = [
    {
        nombre: "Bicicleta",
        costo: 3000,
    },
    {
        nombre: "Television",
        costo: 2500,
    },
    {
        nombre: "Libro",
        costo: 2000,
    },
    {
        nombre: "celular",
        costo: 10000,
    },
    {
        nombre: "Laptop",
        costo: 1202,
    },
    {
        nombre: "Teclado",
        costo: 21202,
    },
    {
        nombre: "Audifonos",
        costo: 214541,
    },
];

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
})

console.log(nombreArticulos);
