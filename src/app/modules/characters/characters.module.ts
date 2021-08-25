import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './pages/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { MaterialModule } from "../material/material.module";
import { DialogModule } from "../dialog/dialog.module";
import { SharedModule } from "../../shared/shared.module";
import { CharacterDialogComponent } from './components/character-dialog/character-dialog.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    CharacterDialogComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule,
    DialogModule,
    SharedModule
  ]
})
export class CharactersModule { }
