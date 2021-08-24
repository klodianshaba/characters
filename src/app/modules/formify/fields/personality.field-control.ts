import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class PersonalityFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel = new FieldModel({
      controlName: 'personality',
      fieldType : FieldTypes.select,
      label: 'Choose personality',
      placeholder: 'personality',
      autoComplete: 'off',
      defaultValue: 'inspire',
      options: [
        {text: 'Honest', value: 'honest'},
        {text: 'Lover', value: 'lover'},
        {text: 'Leader', value: 'leader'},
        {text: 'Elegant', value: 'elegant'},
        {text: 'Hard worker', value: 'hard worker'},
        {text: 'Helper', value: 'helper'},
        {text: 'Inspire', value: 'inspire'},
        ],
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'personality is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
