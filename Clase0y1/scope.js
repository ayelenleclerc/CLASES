const global = "test";

function prueba() {
  const variable = 1;
  console.log(variable);
  console.log(global);
}

// console.log(variable);
prueba();
//console.log(prueba()); // undefined, no esta en el scope
console.log(global);
