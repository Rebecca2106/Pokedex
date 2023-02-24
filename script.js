let currentPokemon;


function openPokemon(i){
    document.getElementById('popUpContainer').classList.remove('hide');
    renderPokeDetail(i);

}

function renderPokeDetail(){
    document.getElementById('popUpContainer').innerHTML = `
    <div id="detail-card" class="detail-card" onclick="closePokemon()">
        <div class="top-container"><h2>${currentPokemon.name}</h2>                
        <div>${currentPokemon.id}</div>
        <img src="${currentPokemon.sprites.other.home.front_default}"></div>
        <div class="bottom-container">

        <div id="bottom-container-about"><span><b>About</b></span>
            <div class="pokemon-details">
                <span> <b>Height:</b> ${currentPokemon.height}</span> 
                <span> <b> Weight:</b> ${currentPokemon.weight}</span> 

            </div>
            </div>
        </div>
    
    </div>
    `;
}


function closePokemon(){
    document.getElementById('popUpContainer').classList.add('hide')

}

async function generatePokemon() {
    for (let i = 1 ; i < 2; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        document.getElementById("maincontent").innerHTML += generateCard(currentPokemon, i)
        gettype(currentPokemon)
    }
}

function generateCard(currentPokemon, i){
    return`
    <div class="card" id="pokecard" onclick="openPokemon(${i-1})">
            <div class="pokemon-card-head">
                <h2>${currentPokemon.name}</h2>
                <div>${currentPokemon.id}</div>
            </div>
            <div class="pokemon-card-wrapper">
                <div class="pokemon-card-class" div id="pokeclass">
                
                   
                
                <img src="" alt="Bulbasaur">
            </div>
        </div>`
}

function gettype(currentPokemon){
    for (let index=0; index<currentPokemon.types.length; index++)
    {
        document.getElementById("pokeclass").innerHTML+= `<div><span>${currentPokemon.types[index].type.name}</span></div>`
    }
}

