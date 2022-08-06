// const options = {
//   method: 'GET',
// };

const form = document.querySelector('#cep-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.querySelector('#input-cep').value;
  if (input === ``) {
    alert('o campo precisa ser preenchido');
    return;
  }
  if (input.length > 8) {
    alert('o cep digitado é invalido');
    return;
  }

  await fetch(`https://viacep.com.br/ws/${input}/json/`)
    .then((response) => {
      console.log(response);

      return response.json();
    })

    .then((cep) => {
      const resposta = document.querySelector('.resposta');
      resposta.textContent = `${cep.logradouro}, ${cep.bairro}, ${cep.localidade}`;
    })
    .catch((err) => {
      const resposta = document.querySelector('.resposta');
      console.log(err);
      resposta.textContent = 'cep invalido';
    });

  console.log(input);
});
