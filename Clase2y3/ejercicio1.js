const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

// const productos = { ...objetos[0], ...objetos[1] };

// const nuevaLista = Object.keys(productos);

// const totalVendidos = Object.values(productos).reduce(
//   (total, v) => v + total,
//   0
// );

// console.log(productos);
// console.log(nuevaLista);
// console.log(totalVendidos);

// const totalProductos = new Set(objetos);
// console.log(totalProductos);

let newArray = [];
let total = 0;

const totalProductos = objetos.forEach((objeto) => {
  const keys = Object.keys(objeto);
  const values = Object.values(objeto);

  total += values.reduce(
    (valorInicial, valorAcumulado) => valorAcumulado + valorInicial,
    0
  );

  keys.forEach((key) => {
    if (!newArray.includes(key)) newArray.push(key);
  });
});
esdtamos;
console.log(newArray);
console.log(total);
