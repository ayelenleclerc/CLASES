import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  if (!req.session.user) {
    //Si ya murió la sesión, redirige al login
    return res.redirect("/login");
  }
  res.render("Profile", { user: req.session.user });
});

router.get("/register", async (req, res) => {
  res.render("Register");
});

router.get("/login", async (req, res) => {
  res.render("Login");
});

//ejemplo
router.get("/elimitarProductos", async (req, res) => {
  //numero 1 ¿Ya tiene credenciales(ya puedo identificarlo?)
  if (!req.session.user)
    return res
      .status(401)
      .send({ status: "error", error: "No estas logueado" });
  //si llega a esta línes, entonces ya se quien es
  //ahora necesito corroborar si tiene el permiso sufiiente
  if (req.session.user.role !== "admin")
    return res.status(403).send({
      status: "error",
      error: "No tienes permisos para ver esta página",
    });

  // si llega hasta aca
  res.send({ status: "success", message: "Productos eliminados" });
});

export default router;
