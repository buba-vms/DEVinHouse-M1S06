const pokeForm = document.querySelector('.poke-search');
const pokeName = document.querySelector('#poke-name');

pokeForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let pokemon = pokeName.value.toLowerCase();
  getPokemon(pokemon);
});

function getPokemon(pokemonName) {
  const xhr = new XMLHttpRequest();
  let pokemon;
  xhr.onload = () => {
    //   console.log(xhr.response);
    pokemon = xhr.response;
    pokemon = {
      nome: pokemon.name,
      altura: pokemon.height,
      peso: pokemon.weight,
      imgLink: pokemon.sprites.front_default,
      habilidades: pokemon.abilities,
    };
    console.log(pokemon);
    // displayPokemon(pokemon);
  };

  xhr.onerror = (err) => console.log(err + aaa);

  xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  xhr.responseType = 'json';
  xhr.send();
}

function displayPokemon(pokemon = {}) {
  const nome = document.querySelector('.nome');
  const altura = document.querySelector('.altura');
  const peso = document.querySelector('.peso');
  const pokeImg = document.querySelector('.poke-img');
  const listaDeHabilidades = document.querySelector('.habilidades');
  nome.textContent = `${pokemon.nome}`;
  altura.textContent = `Altura: ${pokemon.altura}`;
  peso.textContent = `Peso: ${pokemon.peso}`;
  pokeImg.setAttribute('src', `${pokemon.imgLink}`);
  listaDeHabilidades.textContent = '';
  pokemon.habilidades.forEach((habilidade) => {
    listaDeHabilidades.append(createListItem(habilidade.ability.name));
  });
}

getPokemon('charizard');

function createListItem(texto) {
  const li = document.createElement('li');
  li.textContent = texto;
  return li;
}
