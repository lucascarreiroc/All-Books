const bcrypt = require('bcryptjs');
const { userDB } = require('../config/database');

async function usuarioExiste(email, senha, database = userDB) {
  const user = database.usuarios.find(user => user.email === email);
  if (!user) return false;

  // Compara a senha informada com o hash salvo, em vez de comparar números
  return bcrypt.compare(senha, user.senha);
}

function emailExiste(email, database = userDB) {
  return database.usuarios.findIndex(user => user.email === email) !== -1;
}

module.exports = { usuarioExiste, emailExiste };