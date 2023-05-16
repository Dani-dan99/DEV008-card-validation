const validator = {

  isValid: (CardNumber1) => {
    const CardNumber = CardNumber1.split("");
    CardNumber.reverse(); //El método reverse() invierte el orden de los elementos de un array //
    for (let principal = 0; principal < CardNumber.length / 2; principal++) { // primer paso del algoritmo de lunh y primer bucle para interar //
      //const final = CardNumber.length - 1 - principal;
      //const Ultimaposicion = final - principal; 
      //const UltimaPosicion = CardNumber [Ultimaposicion];   // Segundo paso:Reversar el número //
      //CardNumber[Ultimaposicion] = CardNumber[principal];
      // CardNumber[principal] = Ultimaposicion;
    }

    for (let inicial = 1; inicial < CardNumber.length; inicial = inicial + 2) { // Tercer paso:Duplicar el segundo digito //
      CardNumber[inicial] = Number(CardNumber[inicial]) * 2;

      if (CardNumber[inicial] > 9) {
        CardNumber[inicial] = CardNumber[inicial] - 9; // Caurto paso: suma de los digitos, en este caso cualquiera mayor a 9 se le restara 9 y se convierta en un entero //
      }
    }

    let Resultado = 0;

    for (let principal = 0; principal < CardNumber.length; principal++) { // Quinto paso: Que el resultado correcto sea divisible entre 10 // 
      CardNumber[principal] = Number(CardNumber[principal]);
      Resultado = Resultado + CardNumber[principal];
    }
    //console.log(Resultado % 10);
    return Resultado % 10 === 0;
  },

  maskify: (CardNumber) => {
    const visibles = 4;
    //console.log(CardNumber);
    const numeros = CardNumber.slice(0, -visibles).replace(/./g, "#"); //slice:Devuelve una parte(en este caso los nuemros) de un array, para realizar una búsqueda global y reemplazarla se puede incluir
    const ultimos = CardNumber.slice(-visibles); // declaro una constante para los ultimos digitos
    return (numeros + ultimos);
  }


};




export default validator;
