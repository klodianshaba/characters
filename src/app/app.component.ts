import { Component } from '@angular/core';
import {DateService} from "./core/services/date.service";
import {CharacterModel} from "./shared/models/character.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'characters';
  constructor() {
  }
}
