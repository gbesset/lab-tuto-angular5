import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['My goal #1 ever', 'My second goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
  	this.goals.next(goal);
  }

  testMe(){
  	return 'ok, service is called';
  }
}
