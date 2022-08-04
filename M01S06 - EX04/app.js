const xhr = new XMLHttpRequest();
let bulbasaur;
xhr.onload = () => {
  //   console.log(xhr.response);
  bulbasaur = xhr.response;
  bulbasaur = {
    nome: bulbasaur.name,
    altura: bulbasaur.height,
    peso: bulbasaur.weight,
    imgLink: bulbasaur.sprites.front_default,
  };
  console.log(bulbasaur);
  displayPokemon(bulbasaur);
};

xhr.onerror = (err) => console.log(err);

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur');
xhr.responseType = 'json';
xhr.send();

function displayPokemon(pokemon = {}) {
  const nome = document.querySelector('.nome');
  const altura = document.querySelector('.altura');
  const peso = document.querySelector('.peso');
  const pokeImg = document.querySelector('.poke-img');

  nome.textContent = `${pokemon.nome}`;
  altura.textContent = `Altura: ${pokemon.altura}`;
  peso.textContent = `Peso: ${pokemon.peso}`;
  pokeImg.setAttribute('src', `${pokemon.imgLink}`);
}
