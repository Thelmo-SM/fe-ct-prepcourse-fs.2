function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
return /^[0-9]{3}$/.test(num)

}

module.exports = tieneTresDigitos;
