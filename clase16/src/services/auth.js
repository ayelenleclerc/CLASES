import bcrypt from "bcrypt";

const createHash = async (password) => {
  //primero, definica las rondas de mezcla que hay con el password
  const salts = await bcrypt.genSalt(10);
  //ahora si hasheamos
  return bcrypt.hash(password, salts);
};
const validatePassword = (password, hashedPassword) =>
  bcrypt.compare(password, hashedPassword);

export default {
  createHash,
  validatePassword,
};
