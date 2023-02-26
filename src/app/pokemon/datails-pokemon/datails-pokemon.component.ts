import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-datails-pokemon',
  templateUrl: './datails-pokemon.component.html',
})
export class DatailsPokemonComponent {
  pokemonListe:Pokemon[];
  pokemon:Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router:Router,
    private pokemonService:PokemonService,
  ){};

  ngOnInit(){
    this.pokemonListe = this.pokemonService.getPokemonList();
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
}
