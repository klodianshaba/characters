import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../modules/material/material.module";
import { ButtonComponent } from './components/button/button.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { DialogModule } from "../modules/dialog/dialog.module";
import { AvatarComponent } from './components/avatar/avatar.component';
import { DirectionComponent } from './components/direction/direction.component';

@NgModule({
  declarations: [ButtonComponent ,ConfirmDialogComponent, AvatarComponent, DirectionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot(),
    DialogModule
  ],
  exports: [
    ButtonComponent,
    ConfirmDialogComponent,
    AvatarComponent,
    DirectionComponent
  ]
})
export class SharedModule { }
