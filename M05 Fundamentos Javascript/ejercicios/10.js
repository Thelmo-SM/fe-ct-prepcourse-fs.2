function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  let nuevaFecha = new Date(fecha);
  return !isNaN(nuevaFecha) && nuevaFecha.toISOString().slice(0, 10) === fecha;
}

module.exports = esFechaValida;