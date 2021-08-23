import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule) },
  { path: 'add-character', loadChildren: () => import('./modules/add-character/add-character.module').then(m => m.AddCharacterModule) },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
