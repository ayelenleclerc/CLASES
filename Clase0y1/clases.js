class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  static especie = "Humano";
  obtenerEspecie = () => {
    console.log(` Soy: ${Persona.especie}`);
  };
  saludar = () => {
    return console.log(`Hola soy ${this.nombre}`);
  };
}

const persona1 = new Persona("Martin");
persona1.obtenerEspecie();
const persona2 = new Persona("Caro");
persona2.obtenerEspecie();

persona1.saludar();
persona2.saludar();
