import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../state/reducers";
import {CharacterModel} from "../../models/character.model";
import {selectAllCharacters} from "../../../state/selectors/characters.selectors";

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {
  @Input('label') label:string = 'Characters';
  public characters: CharacterModel[] = [];
  constructor(private store:Store<State>) {
    this.store.select(selectAllCharacters).subscribe(characters => {
      if(characters){
        this.characters = characters;
      }
    })
  }

  ngOnInit(): void {
  }

}
