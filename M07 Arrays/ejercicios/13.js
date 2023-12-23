function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let Notas = 0;
  for(let i = 0; i < resultadosTest.length; i++) {
    Notas = Notas + resultadosTest[i];
  }
  let promedio = Notas/resultadosTest.length;

  return promedio;
}

module.exports = promedioResultadosTest;
