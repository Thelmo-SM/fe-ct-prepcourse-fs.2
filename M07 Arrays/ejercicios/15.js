function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== array[0]) {
      return false;
    }
  }
  return true;
}
console.log(todosIguales(["manzana","manzana","manzana"]))

module.exports = todosIguales;
