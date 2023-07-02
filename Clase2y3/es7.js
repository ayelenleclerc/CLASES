//exponencial = **

const valoresBase = [1, 2, 3, 4, 5];

const nuevosValores = valoresBase.map((numero, indice) => numero ** indice);

console.log(nuevosValores);

// Includes

const nombres = ["Luciana", "Gala", "Lau", "Diego"];

if (nombres.includes("Lorena")) {
  console.log("Tenemos incluido este elemento");
} else {
  console.log("Este elemento no está incluido");
}
