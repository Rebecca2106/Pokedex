let currentPokemon;


function openPokemon(){
    document.getElementById('popUpContainer').classList.remove('hide')
}

function closePokemon(){
    document.getElementById('popUpContainer').classList.add('hide')

}

async function generatePokemon() {
    for (let i = 1 ; i <= 2; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
    }
}


