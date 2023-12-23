function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let Dias = 0;
  do {
    switch(mes) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 10:
      case 12:
        Dias = 31;
            break;
      case 4:
      case 6:
      case 8:
      case 9:
      case 11:
        Dias = 30;
            break;
      case 2:
        Dias = 28;
            break;
    }
  } while(false);

return Dias;
}

module.exports = diasEnMes;
