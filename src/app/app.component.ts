import { Component } from '@angular/core';
import {DateService} from "./core/services/date.service";
import {CharacterModel} from "./shared/models/character.model";
// import characters from 'configs/characters.json';

import  *  as  Characters  from  './configs/characters.json';
import {Store} from "@ngrx/store";
import {State} from "./reducers";
import {loadCharacters} from "./actions/characters.actions";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'characters';
  public characters: CharacterModel[] = (Characters as any).default;
  constructor(private store: Store<State>) {
    this.store.dispatch(loadCharacters({characters: this.characters}))
  }
}
