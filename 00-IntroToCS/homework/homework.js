'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
/* Para convertir de numeros decimales a binarios tengo que hacer lo siguiente: 
Multiplicar cada numero por 2 y elevarlo a la potencia dictada por su posicion, esta es de derecha a izquierda iniciando por 0
entonces:
 1 | 0   | 1     | 0   | 1
-- | --- | ----- | ----| ---
2^4| 2^3 |  2^2  | 2^1 | 2^0 */

var arreglo = num.toString().split('').reverse();
var operacion;
var resultado = 0;
  for( var i=0;i<arreglo.length;i++){
    operacion = parseInt(arreglo[i])*Math.pow(2,i);
    resultado = resultado + operacion;
    }
  return resultado;
}


function DecimalABinario(num) {
// tu codigo aca
/* Para convertir un numero decimal a Binario es necesario dividir la cifra entre 2 hasta que el residuo sea 0 y quedarnos con el residuo, ya que
el conjunto de residuos formaran nuestro numero binario. Ej:
21/2 = 10 (resto 1)
10/2 = 5 (resto 0)
5/2 = 2 (resto 1)
2/2 = 1 (resto 0)
1/2 = 0 (resto 1)

Ahora leemos de abajo hacia arriba los restos, al concatenarlos, obtendremos nuestra solución en binario 10101.*/
var resultado = '';
while (num > 0){
  resultado = (num % 2 ) + resultado;
  num = Math.floor(num / 2);
}
return resultado;
    
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}