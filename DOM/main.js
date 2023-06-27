const h1 = document.querySelector('#h1');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btnCalcular');
const Presultado = document.querySelector('#resultado');




//InnerHTML nos permite modificar los que se encuentra dentro de ella 
h1.innerHTML = 'Cambio de Texto <br/> utilizando un br';

//EVENTOS PARA SELECCIONAR LOS SELECTORES

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    Presultado.innerText = "Resultado: " + sumaInputs;
}