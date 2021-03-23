import { Injectable } from '@angular/core';
import { hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root',
})

export class HeroService {

  constructor(private messageService: MessageService) { }


  getHeroes(): Observable<hero[]> {
    return of(HEROES);
  }
  getHero(id: number): Observable<hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }


}

