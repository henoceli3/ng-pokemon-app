import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DatailsPokemonComponent } from './datails-pokemon/datails-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';

const pokemonroutes: Routes = [
  {path:'pokemons', component:ListPokemonComponent},
  {path:'pokemons/:id', component:DatailsPokemonComponent},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DatailsPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [
    RouterModule.forChild(pokemonroutes),
    CommonModule
  ],
  providers:[PokemonService],
})
export class PokemonModule { }
