document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const pokemonNameOrId = document.getElementById('pokemonNameOrId').value;
    fetchPokemon(pokemonNameOrId);
});

function fetchPokemon(nameOrId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let output = `
                
${data.name.charAt(0).toUpperCase() + data.name.slice(1)}

                ${data.name}
                
Types: ${data.types.map(type => type.type.name).join(', ')}


                View Details
            `;
            document.getElementById('pokemonInfo').innerHTML = output;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('pokemonInfo').innerHTML = '
Pokémon not found!

';
        });
}