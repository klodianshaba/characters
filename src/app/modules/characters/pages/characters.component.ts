import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../reducers";
import {CharacterModel} from "../../../shared/models/character.model";
import {selectAllCharacters} from "../../../selectors/characters.selectors";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent implements OnInit {
  public characters: CharacterModel[] = [];
  constructor(private store: Store<State>) {
    // this.store.select(state => state.characters).subscribe(result => {
    //   if(result.characters){
    //     this.characters = result.characters;
    //   }
    // })

    this.store.select(selectAllCharacters).subscribe( characters => {
        if(characters){
          this.characters = characters;
        }
    })
  }

  ngOnInit(): void {
  }

}
