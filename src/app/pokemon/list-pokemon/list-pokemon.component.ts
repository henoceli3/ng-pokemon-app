import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
  pokemeonList : Pokemon[] = POKEMONS;

  constructor(
    private router:Router,
    private pokemonService:PokemonService,
  ){};

  ngOnInit(){
    this.pokemeonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
