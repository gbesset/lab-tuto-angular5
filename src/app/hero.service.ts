import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'

//En vrai, on doit attendre réponse du serveur, methode get par exemple qui retourne un Observable.
// ou un call back (Promise)
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private _messageService: MessageService) { }

  //getHeroes(): Hero[]{
  //	return HEROES;
  //}
  
  // on remplace donc la methode qui revvoit le tableau directement par
  getHeroes(): Observable<Hero[]>{
  	this._messageService.add('HeroService: fetched heroes');
  	return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
  	// pas ' mais ` car un {} dans la chaine de caractère
  	this._messageService.add(`HeroService: fetched heroe with id=${id}`);
  	return of(HEROES.find(hero => hero.id === id));
  }

}
