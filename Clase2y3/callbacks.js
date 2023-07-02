const valoresOriginales = [1, 2, 3, 4, 5];

//módulo: si divido un numero en 2  y el resto es cero; el numero es par
// const funcionCallback = (valor) => {
//   if (valor % 2 === 0) {
//     return valor;
//   } else {
//     return "el numero es impar";
//   }
// };

// const nuevosValores = valoresOriginales.map(funcionCallback);

// console.log(nuevosValores);

// const miFuncionMap = (arreglo, callback) => {
//   const nuevoArreglo = [];
//   for (let i = 0; i < arreglo.length; i) {
//     const nuevoValor = callback(arreglo[i]);
//     nuevoArreglo.push(nuevoValor);
//   }
//   return nuevoArreglo;
// };

// const resultado = miFuncionMap(valoresOriginales, (x) => x * 2);
// console.log(resultado);

const miFuncionMap = (arreglo, callback) => {
  const nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    const nuevoValor = callback(arreglo[i]);
    nuevoArreglo.push(nuevoValor);
  }
  return nuevoArreglo;
};

const resultado = miFuncionMap(valoresOriginales, (x) => x + 2);
console.log(resultado);
