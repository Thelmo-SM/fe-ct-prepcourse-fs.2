// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
   propidad: { 
    nombre: "Anthony",
    saludar() {
        return `Hola ${this.nombre}!`
    }
  }
};

module.exports = objetoAnidado;
