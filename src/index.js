import validator from './validator.js';
function verificacion() { //Tengo que poner la función de verificar hasta arriba para indicar que dentro de ellas estan mis constiabless
  //alertas de campo vacio//
  const nombre = document.getElementById("name").value; //tengo que crear mis constantes para poderles poner condicionale
  const apellido = document.getElementById("lastname").value;
  const correo = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const numero = document.getElementById("CardNumber").value;
  const dia = document.getElementById("MM/AA").value;
  const cvv = document.getElementById("CVV").value;
  const masked = validator.maskify(numero);

  if (nombre === "") { // if=si nombre (s) es igual a "" = nada sale la alerta de verificar nombre (s)
    alert('Verifica tus nombre(s)');
  }
  if (apellido === "") { // 3===es lo mismo que =
    alert('verifica tus apellido(s)');
  }
  if (correo === "") {
    alert('Verifica tu correo');
  }
  if (telefono === "") {
    alert('Verifica tu telfono');
  }
  if (numero === "") {
    alert('Verifica tu numero');
  }
  if (dia === "") {
    alert('Verifica la fecha');
  }
  if (cvv === "") {
    alert('verifica tu CVV');
  }
  //console.log ("empiezan las condiciones")
  //console.log(apellido)

  if (nombre !== "" && apellido !== "" && correo !== "" && telefono !== "" && numero !== "" && dia !== "" && cvv !== "") {  // &&-concatena si nombre no es igual nada
    const CardNumber = document.getElementById("CardNumber"); //Quite el .value y lo coloque en la parte de abjo, ya que no lo necesito en esta constante, porque tambien lo estoy ultizando en mi constante de arriba
    //const Compra = CardNumber; // Me fatalta el elemento de mi primer constiable, ese fue el primer error de mi sintaxis en el botón //
    const Resultado = validator.isValid(CardNumber.value) //tmabien se pueden llamar a los valores dentro de ()//

    if (Resultado === true) {
      alert("Tarejeta aprobada" + masked);
      CardNumber.value = masked //indicas que masked se ejecute en el valor de CardNumber//
    } else {
      alert("Tarejeta invalida")
    }
  }
}




document.getElementById("Compra").addEventListener("click", (verificacion)); // Correción de sintaxis, es validar en lugar de validator.
//button.addEventListener("click", (validar));
// document.getElementById("Compra").addEventListener("click", validator);
//const CardNumber = document.getElementById("Compra").value; agragar el valor de mi boten del numero de gtarjeta
//const compra = document.getElementById("compra"); esta parte va en validator

console.log("validator");

