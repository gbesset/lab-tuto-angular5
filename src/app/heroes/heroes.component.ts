import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes: Hero[];
  selectedHero:Hero;
  
  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  //getHeroes(): void{
  //  this.heroes = this._heroService.getHeroes();
  //}
  
  //on remplace ici aussi (modif dans le service) sinon reponse synchrone.. et pas le cas en sur un service web
  getHeroes(): void{
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  
  //Subscribe est la grosse différence....  pour une reponse asynchrone
  // une fois la réponse obtenue, subscribe passe le tabeau par callback ce qui set le composant heroes correctement

}
