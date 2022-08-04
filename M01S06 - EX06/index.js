/*

Observe os seguintes pedidos:


- Na tag img com a classe pokemonimage adicione a imagem do pokémon que você irá pesquisar.
- No span com a classe pokemonnumber será adicionado o id do pokemon.
- No span com a classe pokemonname será adicionado o nome do pokemon.
- No input com a classe input__search será onde o usuário poderá pesquisar pelo nome ou pelo id.
- No span com o id pokemontype será adicionado o tipo do pokémon pesquisado.
- No span com o id weight irá ser apresentado o peso do pokemon.
- Ao clicar no botão com a classe button será iniciado toda a funcionalidade da aplicação: pesquisa da api, adição das informações nos campos…

*/

const btn = document.querySelector('.button');

//

function getPokemon(pokemonName) {
  const xhr = new XMLHttpRequest();
  let pokemon;
  xhr.onload = () => {
    //   console.log(xhr.response);
    pokemon = xhr.response;
    pokemon = {
      id: pokemon.id,
      nome: pokemon.name,
      peso: pokemon.weight,
      tipos: pokemon.types,
      imgLink: pokemon.sprites.front_default,
      habilidades: pokemon.abilities,
    };
    console.log(pokemon);
    displayPokemon(pokemon);
  };

  xhr.onerror = (err) => console.log(err + aaa);

  xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  xhr.responseType = 'json';
  xhr.send();
}
getPokemon('bulbasaur');

function displayPokemon(pokemon = {}) {
  //display image
  const pokeImg = document.querySelector('.pokemonimage');
  pokeImg.setAttribute('src', `${pokemon.imgLink}`);

  //display name and ID
  const id = document.querySelector('.pokemonnumber');
  const nome = document.querySelector('.pokemonname');
  id.textContent = pokemon.id;
  nome.textContent = pokemon.nome;

  //display tipo
  const tipoSpan = document.querySelector('#pokemontype');
  tipoSpan.textContent = '';
  pokemon.tipos.forEach((tipo) => {
    tipoSpan.textContent += `${tipo.type.name} `;
  });

  //display habilidades
  const listaDeHabilidades = document.querySelector('#ability');
  listaDeHabilidades.textContent = '';
  pokemon.habilidades.forEach((habilidade) => {
    console.log(habilidade.ability.name);
    listaDeHabilidades.append(createList(habilidade.ability.name));
  });

  //display peso

  const peso = document.querySelector('#weight');
  peso.textContent = pokemon.peso;
}

function createList(texto) {
  const li = document.createElement('li');
  li.textContent = texto;
  return li;
}

btn.addEventListener('click', () => {
  //get pokemonname
  const input = document.querySelector('.input__search');
  let pokemonNameOrId = '';
  pokemonNameOrId = input.value;
  //   invoke XMLHTTPRequest function
  getPokemon(pokemonNameOrId);
});
