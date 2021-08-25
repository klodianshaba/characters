import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {InputComponent } from './components/input/input.component';
import {FieldControlComponent} from './components/field-control/field-control.component';
import {SelectComponent } from './components/select/select.component';
import {TextareaComponent } from './components/textarea/textarea.component';
import {FormifyComponent } from './components/formify/formify.component';
import {SubmitComponent} from './components/submit/submit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MaterialModule} from "../material/material.module";
import {ToggleComponent} from './components/toggle/toggle.component';
import {RadioComponent } from './components/radio/radio.component';
import {ArrayControlComponent } from './components/array-control/array-control.component';
import {GroupControlComponent } from './components/group-control/group-control.component';
import {CheckboxComponent } from './components/checkbox/checkbox.component';
import {TagifyModule} from "ngx-tagify";
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    FieldControlComponent,
    ArrayControlComponent,
    GroupControlComponent,
    SubmitComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    SubmitComponent,
    FormifyComponent,
    ToggleComponent,
    RadioComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
    TagifyModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    FieldControlComponent,
    ArrayControlComponent,
    GroupControlComponent,
    SubmitComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    ToggleComponent,
    RadioComponent,
    CheckboxComponent,
    FormifyComponent,
  ],
})
export class FormifyModule { }
