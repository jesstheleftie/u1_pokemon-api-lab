const getPokemon = async()=>{
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu/')
    console.log(pokemon)
}
getPokemon()




let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokemonIn = document.querySelector("#pokemonIn")
    //where does this need to be scoped?

    let textInput = document.querySelector("#inputBar").value
    let pokemon = textInput
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)

    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here
    let pokemonIndex = response.data.id
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
  
    pokemonImage.setAttribute('src', imageUrl)
    let nameOfPokemon = response.data.name
    pokemonName.innerText = nameOfPokemon.charAt(0).toUpperCase()+ nameOfPokemon.slice(1)
    pokemonIn.innerText =`Index: ${pokemonIndex}`
}
)
