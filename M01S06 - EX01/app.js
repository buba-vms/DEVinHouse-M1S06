const nome = prompt('Digite seu nome');
const sobrenome = prompt('Digite seu sobrenome');
const idade = prompt('Digite sua idade');
const date = new Date();
const year = date.getFullYear();
const string = `Eu, ${nome} ${sobrenome} possuo ${idade} anos, e nasci em ${
  year - idade
}`;
document.write(string);
