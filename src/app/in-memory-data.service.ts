import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Sokhna Assy' },
      { id: 12, name: 'Moustapha' },
      { id: 13, name: 'Binetou' },
      { id: 14, name: 'Demba' },
      { id: 15, name: 'Mamadou' },
      { id: 16, name: 'Nafi' },
      { id: 17, name: 'Ousmane' },
      { id: 18, name: 'Fatou' },
      { id: 19, name: 'Coumbaa' },
      { id: 20, name: 'Fanta' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}