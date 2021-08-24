import {FieldModel, FieldState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class AgeFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'age',
      label: 'Enter age',
      placeholder: 'age',
      autoComplete: 'off',
      type: 'number',
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'Age is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
