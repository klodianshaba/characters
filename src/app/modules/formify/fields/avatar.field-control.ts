import {FieldModel, FieldState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class AvatarFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'avatar',
      label: 'Select avatar',
      placeholder: 'avatar',
      type:'file',
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'Avatar is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
