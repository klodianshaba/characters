import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../state/reducers";
import {CharacterModel} from "../../../shared/models/character.model";
import {selectAllCharacters , selectCharacterById} from "../../../state/selectors/characters.selectors";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent implements OnInit {
  public characters: CharacterModel[] = [];
  public character: CharacterModel = new CharacterModel();
  constructor(private store: Store<State>) {

    this.store.select(selectAllCharacters).subscribe( characters => {
        if(characters){
          this.characters = characters;
        }
    })

    this.store.select(selectCharacterById(2)).subscribe( character => {
      if(character){
        this.character = character;
      }
    })
  }

  ngOnInit(): void {
  }

}
