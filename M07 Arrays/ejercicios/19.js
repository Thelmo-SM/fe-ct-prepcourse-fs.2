function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let num1 = [];
  for(let i = 0; i < 10; i ++) {
    if(1 === 5) {
      continue;
    }
    num+=2;
    num1.push(num);
  }
  return num1
}
console.log(continueStatement(3))

module.exports = continueStatement;