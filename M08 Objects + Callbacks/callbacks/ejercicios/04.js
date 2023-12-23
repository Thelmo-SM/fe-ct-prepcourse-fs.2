function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  let ArraySumado = arrayOfNumbers.reduce(function(a, b) {
     a + b, 0;
  });
  cb(ArraySumado);
}


module.exports = sumarArray;
