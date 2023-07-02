const objeto1 = {
  propiedad1: 2,
  propiedad2: "b",
  propiedad3: true,
};

const objeto2 = {
  propiedad4: "c",
  propiedad5: [1, 2, 3, 4],
};

//quiero conseguir un objeto resultante del objeto1 y objeto2
//Spread Operator
const objetoResultante = {
  ...objeto1,
  ...objeto2,
};

//console.log(objetoResultante);

//Rest operator
// es para excluir una propiedad del objeto
const objeto3 = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, ...rest } = objeto3;

console.log(a);
console.log(rest);
