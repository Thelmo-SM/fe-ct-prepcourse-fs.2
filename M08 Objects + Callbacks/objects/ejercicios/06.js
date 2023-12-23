const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contar = 0;
  for(let propiedad in objeto) {
    if(objeto.hasOwnProperty(propiedad)) {
      contar++;
    }
  }
  return contar;
};

module.exports = contarPropiedades;
