let estudiantes = ["Maria", "Sergio", "rosa", "Daniel"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

// //loop de for
// for (let i = 0; i < estudiantes.length; i++) {
//   saludarEstudiantes(estudiantes[i]);
// }


//
for (let estudiante of estudiantes) {
    saludarEstudiantes(estudiantes);
}