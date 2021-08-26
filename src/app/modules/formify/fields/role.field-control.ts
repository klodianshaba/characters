import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class RoleFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel = new FieldModel({
      controlName: 'role',
      fieldType : FieldTypes.select,
      label: 'Choose role',
      placeholder: 'role',
      autoComplete: 'off',
      defaultValue: 'underwater archaeologist',
      options: [
        {text: 'Underwater Archaeologist', value: 'underwater archaeologist'},
        {text: 'Good Samaritan', value: 'good samaritan'},
        {text: 'Fastest', value: 'fastest'},
        {text: 'Sniper expert', value: 'sniper expert'},
        {text: 'Runing hard', value: 'runing hard'},
        {text: 'Rugged Outdoorsman', value: 'rugged outdoorsman'},
        ],
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'role is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
