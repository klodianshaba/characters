import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DialogComponent} from "../../../dialog/dialog.component";
import {DialogConfig} from "../../../dialog/models";
import {ToastrService} from "ngx-toastr";
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
export enum CharacterDialogDirections {
  edit = 'edit',
  profile = 'profile'
}

export type CharacterDialogType = CharacterDialogDirections.edit | CharacterDialogDirections.profile;

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.scss']
})
export class CharacterDialogComponent implements OnInit {

  @ViewChild('dialog' , { static: true }) dialog: DialogComponent;

  @Input('direction') direction: CharacterDialogType = CharacterDialogDirections.edit;

  @Input('status') set onStatus(status: boolean) { (status)?  this.dialog.show(): null }

  @Output() statusChange = new EventEmitter();

  @Output() onConfirm: EventEmitter<boolean> = new EventEmitter();

  public dialogConfig: DialogConfig = { padding: false};

  constructor(private toast: ToastrService , private store: Store<State>) {}

  ngOnInit() {}

  onHide() {
    this.statusChange.emit(false);
  }
  onClickConfirm(): void {
    this.onConfirm.emit(true);
  }

  isEdit(): boolean{
    return (this.direction === CharacterDialogDirections.edit)
  }
  isProfile(): boolean{
    return (this.direction === CharacterDialogDirections.profile)
  }

  onEditCharacter(): void {

  }

}
