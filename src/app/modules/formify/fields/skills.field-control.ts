import {FieldModel, FieldState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class SkillsFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'skills',
      label: 'Enter skills',
      placeholder: 'skills',
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'Name is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
