function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let numMasGrande = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[numMasGrande]) {
      numMasGrande = i;
    }
  }
  return numMasGrande;
}

module.exports = encontrarIndiceMayor;
