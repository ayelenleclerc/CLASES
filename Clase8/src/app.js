import express from "express"; //entonces ya tengo mi aplicación de express
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js"; //como puse export default en user router, ahora podría importarla desde app.js (le paso la ruta a la que quiero visitar)
const app = express(); //la idea es que este app reciba la petición, va a reconocer la petición de tipo usuario y va a redirigirlo al archivo users.router.js
import __dirname from "./utils.js";

//midlwares : aquí empieza la petición
app.use(express.json()); //Me permite leer jsons en las peticiones.
//m: intercepta la petición: ¿la petición viene en json? no? conviertela a json y continua
app.use(express.urlencoded({ extended: true })); //Objetos codificados desde URL
//m:la petición venia en codificación de url? no? continua

app.use(express.static(`${__dirname}/public`));
//m: tengo que serevir algún archivo estatico? no? continua
app.use("/api/users", usersRouter);
//m: la petición coincide con api users? no? continua
app.use("/api/pets", petsRouter);
//m: la petición coincide con api pets? si.. redirige a pets routers
//que la idea es tener métodos que hacen referencia a la solución de  un problema en particular

// const miPrimerMiddleware = (req,res,next) =>{
//     const body = req.body;
//     if(body.user==="Benjamin") return res.status(403).send({status:"error",error:"No autorizado"});
//     next();
// }

// app.use(miPrimerMiddleware);
//app.get ('/users', (req, res)=>{
//con este método solicitamos obtener a los usuarios
//})
// app.post ('/users', (req, res)=>{
//  //con este método solicitamos crear usuarios
// })
// app.put ('/users', (req, res)=>{
//   //en este estamos solicitando actualizar la información de los usuarios
// })
// app.delete ('/users', (req, res)=>{
// // con este método estamos solicitando borrar el listado de usuarios
// })

//app.get ('/pets', (req, res)=>{
//con este método solicitamos obtener a los usuarios
// })

//el problema radica en que un usuario no es lo único que voy a tener y se me va a hacer un archivo app gigante. Para esto la solución es router.

app.listen(8080, () => console.log("Listening 8080")); //y esa aplicación de express está escuchando en un puerto
