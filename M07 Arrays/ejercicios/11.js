function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let multiplicarIndex = [];

  for (let i = 1; i < array.length; i++) {
    multiplicarIndex.push(array[i] * i);
  }
  return multiplicarIndex;
}

module.exports = multiplicarElementosPorIndice;
