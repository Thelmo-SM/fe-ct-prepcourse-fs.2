function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let sumar = 0;
  for(let i = 1; i <= n; i++) {
    sumar+= i;
 }
 return sumar;
}

module.exports = sumarHastaN;
