const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento)=>{
    validarNacimiento(evento.target);
});

function validarNacimiento(input){
const fecha = input.value;
console.log(fecha);
}