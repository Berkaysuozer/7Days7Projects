const ROWDOM = document.getElementById("row");
pokemon_count = 100;

const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    createPokeCard(data);
}

const createPokeCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add("col-12");
    pokemonEl.classList.add("col-sm-6");
    pokemonEl.classList.add("col-md-4");
    pokemonEl.classList.add("col-lg-3");
    pokemonEl.classList.add("col-xl-2");
    pokemonEl.classList.add("pokemon");
    let color;
    switch (pokemon.types[0].type.name) {

        case "grass": color = "lightgreen";
            break;
        case "fire": color = "lightcoral";
            break;
        case "bug": color = "burlywood";
            break;
        case "water": color = "lightskyblue";
            break;
        case "normal": color = "white";
            break;
        case "poison": color = "DarkSlateGray";
            break;
        case "electric": color = "yellow";
            break;
        case "ground": color = "FireBrick";
            break;
        case "ghost": color = "Fuchsia";
            break;
        case "rock": color = "DarkSlateBlue";

    }
    pokemonEl.style.backgroundColor = color;
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    pokemonEl.innerHTML = ` 
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">        
        <h4>${name}</h4>
        <span class="badge bg-primary">${pokemon.types[0].type.name.toUpperCase()}</span>
    `
    ROWDOM.appendChild(pokemonEl)
}
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}
fetchPokemons();


