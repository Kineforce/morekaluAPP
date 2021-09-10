import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  
  state$ = new BehaviorSubject<number>(0);

  constructor() { }

}
