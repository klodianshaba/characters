import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './pages/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { MaterialModule } from "../material/material.module";
import { DialogModule } from "../dialog/dialog.module";
import { SharedModule } from "../../shared/shared.module";
import { CharacterDialogComponent } from './components/character-dialog/character-dialog.component';
import { ViewtifyCharacterComponent } from './components/viewtify-character/viewtify-character.component';
import {FormifyModule} from "../formify/formify.module";
import {TagifyModule} from "ngx-tagify";
@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    CharacterDialogComponent,
    ViewtifyCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule,
    DialogModule,
    SharedModule,
    FormifyModule,
    TagifyModule.forRoot(),
  ],
  exports: [
    ViewtifyCharacterComponent
  ]
})
export class CharactersModule { }
