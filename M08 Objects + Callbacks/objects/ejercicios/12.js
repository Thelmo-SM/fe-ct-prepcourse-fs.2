function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  let objeto = {
    numeroMisterioso: objetoMisterioso * 5
  }
  return objeto;
}
console.log(multiplicarNumeroDesconocidoPorCinco(2))

module.exports = multiplicarNumeroDesconocidoPorCinco;
