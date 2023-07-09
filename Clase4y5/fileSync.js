const fs = require("fs");

//fs con sincronismo

fs.writeFileSync(
  "./ejemplo.txt",
  "Creamos el archivo con fs para persistencia en archivos"
);

if (fs.existsSync("./ejemplo.txt")) {
  let contenido = fs.readFileSync("./ejemplo.txt", "utf8");

  fs.appendFileSync("./ejemplo.txt", "\nSalimos de la persistencia en memoria");
  contenido = fs.readFileSync("./ejemplo.txt", "utf8");
  console.log(contenido);

  fs.unlinkSync("./ejemplo.txt");
}
