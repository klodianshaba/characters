import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TagifySettings} from "ngx-tagify";
import {BehaviorSubject} from "rxjs";
import {CharacterModel} from "../../../../shared/models/character.model";
import {FormifyModel} from "../../../formify/models";
import {NameFieldControl} from "../../../formify/fields";
import {RoleFieldControl} from "../../../formify/fields/role.field-control";
import {DescriptionFieldControl} from "../../../formify/fields/description.field-control";
import {AgeFieldControl} from "../../../formify/fields/age.field-control";
import {PersonalityFieldControl} from "../../../formify/fields/personality.field-control";
import {SkillsFieldControl} from "../../../formify/fields/skills.field-control";
import {DateFieldControl} from "../../../formify/fields/date.field-control";
import {AvatarFieldControl} from "../../../formify/fields/avatar.field-control";
import {DateService} from "../../../../core/services/date.service";
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
import {ToastrService} from "ngx-toastr";
import {selectAllCharacters} from "../../../../state/selectors/characters.selectors";
import {addCharacter, editCharacter} from "../../../../state/actions/characters.actions";
import {AvatarDirection} from "../../../../shared/components/avatar/avatar.component";
export enum CharacterDirections {
  edit = 'edit',
  add = 'add',
  view = 'view'
}
export type CharacterDirectionsType = CharacterDirections.add | CharacterDirections.edit | CharacterDirections.view;
@Component({
  selector: 'app-viewtify-character',
  templateUrl: './viewtify-character.component.html',
  styleUrls: ['./viewtify-character.component.scss']
})
export class ViewtifyCharacterComponent implements OnInit {
  @Input('settings') settings: TagifySettings = {
    placeholder: 'Enter skills...',
    addTagOnBlur: true,
    blacklist: ['fucking', 'shit'],
    delimiters: ",| ",
    callbacks: {
      click: (e) => {  }
    }
  };
  @Input('whitelist') whitelist$ = new BehaviorSubject<string[]>(['hello', 'world']);
  @Input('readonly') readonly = false;
  @Input('direction') direction: CharacterDirectionsType = CharacterDirections.add;
  @Input('character') character: CharacterModel = new CharacterModel();
  @Output('onUpdated') onUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('onInserted') onInserted: EventEmitter<boolean> = new EventEmitter<boolean>();
  public AvatarDirection = AvatarDirection;
  private characters: CharacterModel[] = [];
  public formify: FormifyModel = new FormifyModel({
    controls: [
      new NameFieldControl({}),
      new RoleFieldControl({}),
      new DescriptionFieldControl({}),
      new AgeFieldControl({}),
      new PersonalityFieldControl({}),
      new SkillsFieldControl({}),
      new DateFieldControl({}),
      new NameFieldControl({controlName:'creator', placeholder:'Name of creator', label: 'Enter name of creator'}),
      new AvatarFieldControl({}),
    ],
    submit: { text: 'Save'}
  });
  constructor(private cdr: ChangeDetectorRef, private date: DateService, private store: Store<State>, private toastr: ToastrService ) {
    this.formify.formGroup.patchValue({date: this.date.toUTC()})
    this.store.select(selectAllCharacters).subscribe(characters => {
      if(characters){
        this.characters = characters;
      }
    });
  }

  ngOnInit(): void {
    if(this.isEdit()) this.formify.formGroup.patchValue(this.character);
  }

  onAvatarPathSelected(event: string | ArrayBuffer): void{
    this.formify.formGroup.patchValue({avatar:event});
  }

  onSubmit(): void{
    this.formify.loading(true);
    setTimeout(() => {
      this.formify.loading(false);
      if(this.formify.formGroup.valid){
        this.character = {...this.character, ...this.formify.formGroup.value}
        if(this.isAdd()) this.character.id = new Date().valueOf();
        if(this.isAdd()) this.onAddCharacter(this.character);
        if(this.isEdit()) this.onEditCharacter(this.character);
      }
    }, 1000);
  }

  isEdit(): boolean{
    return (this.direction === CharacterDirections.edit);
  }
  isAdd(): boolean{
    return (this.direction === CharacterDirections.add);
  }
  isView(): boolean{
    return (this.direction === CharacterDirections.view);
  }

  onEditCharacter(character: CharacterModel): void{
    if(!this.characters.find(item => item.id === character.id)){
      this.toastr.warning(character.name + ' was not founded to edit', '' ,{
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.store.dispatch(editCharacter({character: character}));
      this.toastr.success(character.name + ' updated successfully', '' ,{
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
      this.onUpdated.emit(true);
    }
  }
  onAddCharacter(character: CharacterModel): void{
    if(this.characters.find(item => item.name === character.name)){
      this.toastr.warning(character.name + ' already exist', '' ,{
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.store.dispatch(addCharacter({character: character}));
      this.toastr.success(character.name + ' created successfully', '' ,{
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
      this.onInserted.emit(true);
    }
  }
}
