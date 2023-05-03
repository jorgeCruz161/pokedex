import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PokemonData } from '../interfaces/pokemon'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  poke_api_url: string = 'https://pokeapi.co/api/v2/pokemon/';

  _pokemonData: PokemonData[] = [];

  constructor(
    private http: HttpClient
  ) {}


  getPokemonInfo(value?: string): Observable<PokemonData>{
    return this.http.get<PokemonData>(`${this.poke_api_url}`+value);
  }

}
