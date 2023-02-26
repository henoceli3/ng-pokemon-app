import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import {POKEMONS} from './mock-pokemons'

@Injectable()
export class PokemonService {

  getPokemonList():Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId:number):Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId); 
  }

}
