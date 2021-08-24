import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class DescriptionFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel = new FieldModel({
      controlName: 'description',
      fieldType : FieldTypes.textarea,
      label: 'Enter role description',
      placeholder: 'description',
      autoComplete: 'off',
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'description is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
