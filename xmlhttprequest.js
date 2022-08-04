const xhr = new XMLHttpRequest();
let pokemons;
xhr.onload = () => {
  //   console.log(xhr.response);
  pokemons = xhr.response.results;
  console.log(pokemons);
  console.log(pokemons[0].name);
};

xhr.onerror = (err) => console.log(err);

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon');
xhr.responseType = 'json';
xhr.send();

// console.log(pokemons);
