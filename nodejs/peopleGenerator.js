const faker = require('faker');

function gerarNomeAleatorio() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return `${firstName} ${lastName}`;
}

module.exports = gerarNomeAleatorio;