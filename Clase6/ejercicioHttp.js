// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello, world!");
// });

// EJERCICIO 1

// const server = http.createServer((req, res) => {
//   const now = new Date();
//   const hour = now.getHours();
//   let message;

//   if (hour >= 6 && hour < 12) {
//     message = "Buenos dias";
//   } else if (hour >= 12 && hour < 20) {
//     message = "Buenas tardes";
//   } else {
//     message = "Buenas noches";
//   }
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(message);
// });

// const connectedServer = server.listen(8080, () => {
//   console.log(
//     `Servidor Http escuchando el puerto ${connectedServer.address().port}`
//   );
// });
