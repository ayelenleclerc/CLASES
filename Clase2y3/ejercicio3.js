const sumar = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero1 === 0 || numero2 === 0) reject("Operación innecesaria");
    if (numero1 + numero2 < 0)
      reject("La calculadora solo devuelve valores positivos");

    resolve(numero1 + numero2);
  });
};

const restar = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero1 === 0 || numero2 === 0) reject("Operación innecesaria");
    if (numero1 - numero2 < 0)
      reject("La calculadora solo devuelve valores positivos");

    resolve(numero1 - numero2);
  });
};

const multiplicar = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero1 < 0 || numero2 < 0)
      reject("La calculadora solo devuelve valores positivos");
    resolve(numero1 * numero2);
  });
};

const dividir = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero2 === 0) reject("No se puede dividir ente cero");
    resolve(numero1 / numero2);
  });
};

const calculos = async () => {
  try {
    const numero1 = 15;
    const numero2 = 5;
    console.log(await sumar(numero1, numero2));
    console.log(await restar(numero1, numero2));
    console.log(await multiplicar(numero1, numero2));
    console.log(await dividir(numero1, numero2));
  } catch (error) {
    console.log(error);
  }
};

calculos();
