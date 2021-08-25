import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCharacterRoutingModule } from './add-character-routing.module';
import { AddCharacterComponent } from './pages/add-character.component';
import { FormifyModule } from "../formify/formify.module";
import {TagifyModule} from "ngx-tagify";
import {SharedModule} from "../../shared/shared.module";
import {CharactersModule} from "../characters/characters.module";


@NgModule({
  declarations: [
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    AddCharacterRoutingModule,
    FormifyModule,
    TagifyModule.forRoot(),
    SharedModule,
    CharactersModule,
  ]
})
export class AddCharacterModule { }
