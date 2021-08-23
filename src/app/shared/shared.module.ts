import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../modules/material/material.module";
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedModule { }
