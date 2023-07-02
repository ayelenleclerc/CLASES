// const dividir = (dividendo, divisor) => {
//   return new Promise((resolve, reject) => {
//     if (divisor === 0) {
//       reject("No se puede dividir por 0");
//     } else {
//       resolve(dividendo / divisor);
//     }
//   });
// };

// //console.log(dividir(2, 2));

// dividir(6, 3)
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede dividir por 0");
    } else {
      resolve(dividendo / divisor);
    }
  });
};

const funcionAsincrona = async () => {
  try {
    const resultado = await dividir(10, 5);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};
funcionAsincrona();
