import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {DialogComponent} from "../../../dialog/dialog.component";
import {DialogConfig} from "../../../dialog/models";
import {ToastrService} from "ngx-toastr";
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
import {CharacterModel} from "../../../../shared/models/character.model";
import {deleteCharacter, editCharacter} from "../../../../state/actions/characters.actions";
import {CharacterDirections} from "../viewtify-character/viewtify-character.component";

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.scss']
})
export class CharacterDialogComponent implements OnInit {

  @ViewChild('dialog' , { static: true }) dialog: DialogComponent;
  @Input('direction') direction: CharacterDirections = CharacterDirections.view;
  @Input('character') character: CharacterModel;
  @Input('displayActions') displayActions: boolean = true;
  @Input('status') set onStatus(status: boolean) { (status)?  this.dialog.show(): null }
  @Output() statusChange = new EventEmitter();
  @Output() onEdit: EventEmitter<CharacterModel> = new EventEmitter();
  public dialogConfig: DialogConfig = { padding: false};
  public CharacterDirections = CharacterDirections;

  constructor(private toastr: ToastrService , private store: Store<State>) {}

  ngOnInit() {}

  onHide() {
    this.statusChange.emit(false);
  }

  isEdit(): boolean{
    return (this.direction === CharacterDirections.edit)
  }
  isView(): boolean{
    return (this.direction === CharacterDirections.view)
  }

  onEditCharacter(): void {
    this.store.dispatch(editCharacter({character: this.character}));
    this.onEdit.emit(this.character);
  }

  onClickDeleteCharacter(): void{
  }
  onClickEditCharacter(): void{
    this.direction = CharacterDirections.edit;
  }
  onClickVisibleCharacter(): void{
    // this.direction = CharacterDirections.view;
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
