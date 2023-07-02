const objeto1 = {
  impuesto1: 12,
  impuesto2: 42,
  impuesto3: 35,
};

//Object.keys =devuelve las claves
const soloPropiedades = Object.keys(objeto1);
// console.log(soloPropiedades);

//Object.entries =devuelve un array por cada clave:valor
const entradas = Object.entries(objeto1);
// console.log(entradas);

//Object.values =devuelve los valores
const soloValores = Object.values(objeto1);
console.log(soloValores);
