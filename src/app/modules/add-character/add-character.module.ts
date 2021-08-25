import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCharacterRoutingModule } from './add-character-routing.module';
import { AddCharacterComponent } from './pages/add-character.component';
import { FormifyModule } from "../formify/formify.module";

@NgModule({
  declarations: [
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    AddCharacterRoutingModule,
    FormifyModule
  ]
})
export class AddCharacterModule { }
