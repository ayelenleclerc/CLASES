// process.argv = son los argumentos de process cuantos argumentos tiene node index.js 3 (tiene 3 argumentos)
//process.argv es para configurar cosas, desde la inicializacion misma del programa.
import { Command, Option } from "commander";

const program = new Command();
program
  .option("-d <debug>", "Variable para debuggear", false)
  .addOption(
    new Option("-m, --mode <mode>", "Modo de ejecución")
      .choices(["dev", "staging", "production"])
      .default("production")
  )
  .option("-p <port>", "Puerto en el que correrá el servidor", 8080)
  .requiredOption("-u <user>", "Usuario que llamó el script")
  .requiredOption("-p <password>", "Contraseña")
  .option("-l, --letters [letters...]", "letras");

// program.argument('<numbers...>').action

program.parse();

console.log(`Opciones: ${JSON.stringify(program.opts())}`);
console.log(`Argumentos: ${program.args}`);
