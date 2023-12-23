function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumarArray = 0;
  for(let i = 0; i < arrayOfNums.length; i++) {
    sumarArray = sumarArray + arrayOfNums[i];
  }
  return sumarArray;
}

module.exports = agregarNumeros;
