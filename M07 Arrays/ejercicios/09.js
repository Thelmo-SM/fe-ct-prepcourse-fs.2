function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let MayoresADies = array.filter(function(value) {
    return value > 10;
  });
  return MayoresADies;
}

module.exports = contarElementosMayoresA10;
