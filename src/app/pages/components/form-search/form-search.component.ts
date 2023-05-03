import { Component, EventEmitter, OnInit, Output } from '@angular/core';  
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { PokeApiService } from 'src/app/services/service/poke-api.service';
import { PokemonData } from 'src/app/services/interfaces/pokemon';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent  {

  @Output() items = new EventEmitter<any>();

  writePokemon: FormGroup;

  constructor(
   private fb: FormBuilder, 
   private dataService: PokeApiService,
  ){
    // Formulario de busqueda de pokemon
    this.writePokemon = this.fb.group({
      pokemon: ['']
    })
  }

  onSubmit(){

    //Consumo de poke api

    this.dataService.getPokemonInfo( this.writePokemon.get('pokemon')?.value ).subscribe({
      next: ( res ) => {
        this.items.emit(res);
      },
      error: ( error ) => {
        console.log( error );
      },
      complete() {
        console.log("it´s ok :D");
      },
    })

  }



}
