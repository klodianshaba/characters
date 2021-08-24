import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from "../../../../shared/models/character.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input('character') character: CharacterModel = new CharacterModel();
  constructor() { }
  ngOnInit(): void {
  }
}
