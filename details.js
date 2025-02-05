document.addEventListener('DOMContentLoaded', function() {
    fetchPokemonDetails(150); // Mewtwo is my fiance's favorite. ID is 150
});

function fetchPokemonDetails(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {
            let abilities = data.abilities.map(a => a.ability.name).join(', ');
            let types = data.types.map(t => t.type.name).join(', ');
            let stats = data.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join('
');
            
            document.getElementById('pokemonDetails').innerHTML = `
                
${data.name.charAt(0).toUpperCase() + data.name.slice(1)}

                ${data.name}
                
Abilities: ${abilities}

Types: ${types}
    
Stats:
${stats}
            `;
        })
        .catch(error => console.error('Error:', error));
}