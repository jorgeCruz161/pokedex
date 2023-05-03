import { Component} from '@angular/core';
import { Tile } from 'src/app/services/interfaces/pokemon';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {

  putPokeData: any[]= [];

  color: string = "#DDBDF1"

  getPokeData( data: [] ){
    this.putPokeData = data;
    console.log(this.putPokeData);
  }

}
