import {Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import {CharacterModel} from "../../../../shared/models/character.model";
import {ToastrService} from "ngx-toastr";
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
import {deleteCharacter} from "../../../../state/actions/characters.actions";
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input('character') character: CharacterModel = new CharacterModel();
  @Output('onCharacter') onCharacter: EventEmitter<CharacterModel> = new EventEmitter<CharacterModel>();
  public loadedAvatar: boolean = false;
  constructor(private toastr: ToastrService, private store: Store<State>) { }
  ngOnInit(): void {
  }
  onClickCharacter():void {
    this.onCharacter.emit(this.character);
  }
  onDeleteCharacter(event: Event):void {
    event.stopPropagation();
  }
  onEditCharacter(event: Event):void {
    event.stopPropagation();
  }
  onConfirmDelete(): void{
    this.store.dispatch(deleteCharacter({id: this.character.id}))
    this.toastr.success(this.character.name + ' deleted successfully', '' ,{
      closeButton: true,
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    });
  }
}
