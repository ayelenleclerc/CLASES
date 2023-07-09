//sincronismo
// console.log('inicio de tareas');
// console.log('tarea1');
// console.log("tarea2");
// console.log("fin tareas");

//asincronismo

const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000); //en milisegundos
};

const operacion = () => console.log("Realizando Operación");
console.log("inicio de tareas");
temporizador(operacion);
console.log("fin tareas");
