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
            resolve(data); // Resuelve la promesa después de 1 segundo, devolviendo el arreglo de datos
        }, 1000);
    });
}


async function fetchingData() {
    const books = await getData(); // Espera a que la promesa se resuelva y almacena el resultado en 'books'
    console.log(books); // Imprime los libros en la consola
}

fetchingData(); // Llama a la función 'fetchingData' para comenzar el proceso de obtención de datos
