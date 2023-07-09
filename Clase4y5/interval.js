const contador = () => {
  let contador = 0;

  let timer = setInterval(() => {
    contador++;
    console.log(contador);
    if (contador > 5) {
      clearInterval(timer);
    }
  }, 2000);
};

console.log("inicio de tareas");
contador();
console.log("fin tareas");
