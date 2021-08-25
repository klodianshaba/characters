import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormifyModel} from "../../formify/models";
import {BiographyFieldControl, NameFieldControl} from "../../formify/fields";
import {DescriptionFieldControl} from "../../formify/fields/description.field-control";
import {RoleFieldControl} from "../../formify/fields/role.field-control";
import {AgeFieldControl} from "../../formify/fields/age.field-control";
import {DateFieldControl} from "../../formify/fields/date.field-control";
import {PersonalityFieldControl} from "../../formify/fields/personality.field-control";
import {SkillsFieldControl} from "../../formify/fields/skills.field-control";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCharacterComponent implements OnInit {

  public formify: FormifyModel = new FormifyModel({
    controls: [
      new NameFieldControl({}),
      new RoleFieldControl({}),
      new DescriptionFieldControl({}),
      new AgeFieldControl({}),
      new PersonalityFieldControl({}),
      // new SkillsFieldControl({}),
      // new DateFieldControl({}),
      new NameFieldControl({controlName:'creator', placeholder:'Name of creator', label: 'Enter name of creator'}),
    ],
    submit: { text: 'Save'}
  });
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onSubmit(): void{
    this.formify.loading(true);
    setTimeout(() => {
      this.formify.loading(false);
      this.cdr.detectChanges();
    }, 1000);
  }

}
