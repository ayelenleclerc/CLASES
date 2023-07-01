// const lista1 = [];
// const lista2 = [
//   "lunes",
//   "martes",
//   "miercoles",
//   "jueves",
//   "viernes",
//   "sabado",
//   "domingo",
// ];

function mostrarLista(arreglo) {
  if (arreglo.length === 0) {
    console.log("Lista vacía");
  }
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
  console.log(` Longitud de la lista: ${arreglo.length}`);
}

// mostrarLista(lista1);
// mostrarLista(lista2);
mostrarLista([1, 3, 9, 27]);
