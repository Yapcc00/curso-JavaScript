
//global
let Minombre = "Andres"
function nombre() {
    //Local
    let miApellido = "Cordoba"
    console.log(Minombre + " " + miApellido)
}
nombre();
console.log(Minombre)
//no sirve llamarlo el apellido ya que es el ambito globay y solo peude ser llamado en el ambito local
console.log(miApellido)