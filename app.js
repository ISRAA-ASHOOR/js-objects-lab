
const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
}

// Exercise 1

console.dir(pokemon, { maxArrayLength: null });

console.log('-------------------------------');

// Exercise 2

console.log(game);

console.log('-------------------------------');

// Exercise 3

game.difficulty = 'Med';
console.log(game);

console.log('-------------------------------');

// Exercise 4

// using filter method to add all of the stater pokemon

const starterPokemons = pokemon.filter((pokemon) => pokemon.starter === true);

if (starterPokemons) {
    game.party = starterPokemons;
};

console.log(game);

console.log('-------------------------------');

// Exercise 5

const hhpPokemons = pokemon.filter((pokemon) => pokemon.hp > 90 && pokemon.type === 'water');

if (hhpPokemons) {
    game.party.push(...hhpPokemons);
};

console.log(game);

console.log('-------------------------------');

// Exercise 6

game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});

console.log(game);

console.log('-------------------------------');

// Exercise 7

const update1 = game.party.splice(0,1,pokemon[1]);
const update2 = game.party.splice(1,1,pokemon[4]);
const update3 = game.party.splice(2,1,pokemon[7]);
const update4 = game.party.splice(3,1,pokemon[25]);
console.log(game);

console.log('-------------------------------');

// Exercise 8

game.party.forEach(pokemon => {
    console.log(pokemon.name);
});

console.log('-------------------------------');

// Exercise 9

pokemon.forEach(pokemon =>  {
    if (pokemon.starter === true){
        console.log(pokemon.name);
    };
});

console.log('-------------------------------');

// Exercise 10

const catchPokemon = pokemon.filter((pokemon) => pokemon.hp > 80 && pokemon.type === 'ice');

game.catchPokemon = function(pokemonObj) {
    game.party.push(...pokemonObj);
};

game.catchPokemon(catchPokemon);
console.log(game);

console.log('-------------------------------');

// Exercise 11

const catchPokemon1 = pokemon.filter((pokemon) => pokemon.hp > 90 && pokemon.type === 'dragon');

game.catchPokemon1 = function(pokemonObj) {
    game.party.push(...pokemonObj);
    game.items.find(item => item.name === "pokeball").quantity--;
};

game.catchPokemon1(catchPokemon1);
console.log(game);

console.log('-------------------------------');

// Exercise 12

game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
});

console.log(game);

console.log('-------------------------------');

// Exercise 13

game.gymStatus = function() {
    const gymTally = { completed: 0, incomplete: 0 };
    
    game.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    });
    
    console.log("Gym Tally:");
    console.log(gymTally);
};

console.log(game);
game.gymStatus();

console.log('-------------------------------');

// Exercise 14

game.partyCount = function() {
    console.log(game.party.length);
};

game.partyCount();

console.log('-------------------------------');

// Exercise 15

game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
});

console.log(game);

console.log('-------------------------------');

// Exercise 16

console.log(game);