// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem "Número validado é par”.
// Caso o valor seja impar, retorne para o catch a mensagem “Error: número informado é impar”.

// Adicionei reject para caso valor não seja um número

function verificarPar(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve('Número validado é par');
    } else if (num % 2 === 1) {
      reject('Error: Número informado é impar');
    } else {
      reject('Error: Valor invalido');
    }
  });
}

verificarPar('a')
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

verificarPar(1)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

verificarPar(2)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
