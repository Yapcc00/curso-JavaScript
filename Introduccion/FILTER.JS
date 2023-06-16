var articulos = [
  {
    nombre: "Bicicleta",
    costo: 3000,
  },
  {
    nombre: "Television",
    costo: 500,
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
    costo: 500,
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

var articulosFiltrados = articulos.filter(function(articulo) {
  return articulo.costo <= 500
}
)

console.log(articulosFiltrados);
