import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/services/interfaces/pokemon'

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnChanges {

  @Input() _pokeData: any;

  name: string = '';


  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log( this._pokeData);

    this.name = this._pokeData.species.name;

  }
 



}
