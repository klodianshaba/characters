import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './pages/characters.component';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
