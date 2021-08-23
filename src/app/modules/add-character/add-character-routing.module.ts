import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCharacterComponent } from './pages/add-character.component';

const routes: Routes = [{ path: '', component: AddCharacterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCharacterRoutingModule { }
