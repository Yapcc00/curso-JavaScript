const data = [
    {
        title: "Aprediendo JavaScript",
        year: "2023",
        isbn: "11152251-2151",
        author: "Yeison Cordoba",
    },
    {
        title: "React.js",
        year: "2024",
        isbn: "12341-2151",
        author: "Yeison Parra Cordoba",
    },
    {
        title: "HTLM AND CSS",
        year: "2022",
        isbn: "w234-2151",
        author: "Andres Cordoba",
    },
];

function getData() {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject(new Error("Data is empty")); // Rechaza la promesa si el arreglo de datos está vacío
        }

        setTimeout(() => {
            resolve(data); // Resuelve la promesa después de 2 segundos, devolviendo el arreglo de datos
        }, 2000);
    });
}

getData()
    .then((response) => console.log(response)) // Imprime el resultado resuelto si la promesa se resuelve exitosamente
    .catch((err) => console.log(err.message)); // Imprime el mensaje de error si la promesa es rechazada
