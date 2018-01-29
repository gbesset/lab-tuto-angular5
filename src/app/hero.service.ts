import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//En vrai, on doit attendre réponse du serveur, methode get par exemple qui retourne un Observable.
// ou un call back (Promise)
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  //getHeroes(): Hero[]{
  //	return HEROES;
  //}
  
  // on remplace donc la methode qui revvoit le tableau directement par
  getHeroes(): Observable<Hero[]>{
  	return of(HEROES);
  }

}
