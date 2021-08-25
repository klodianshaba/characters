import {Component, forwardRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FieldControlComponent} from "../field-control/field-control.component";

@Component({
  selector: 'formify-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatepickerComponent) , multi: true}
  ]
})
export class DatepickerComponent extends FieldControlComponent implements OnInit , OnChanges {
  constructor(protected formBuilder: FormBuilder) { super(formBuilder); }
  ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  ngOnInit(): void {super.ngOnInit(); }
}
