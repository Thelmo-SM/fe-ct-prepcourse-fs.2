function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  let nuevoArray = []
  array.forEach(function(value) {
    return nuevoArray.push(cb(value));
  })
  return nuevoArray;
}

module.exports = forEach;
