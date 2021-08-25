import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../modules/material/material.module";
import { ButtonComponent } from './components/button/button.component';
import { ToastrModule } from 'ngx-toastr';
import { AngularResizedEventModule } from 'angular-resize-event';
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { DialogModule } from "../modules/dialog/dialog.module";
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [ButtonComponent ,ConfirmDialogComponent, AvatarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot(),
    AngularResizedEventModule,
    DialogModule
  ],
  exports: [
    ButtonComponent,
    AngularResizedEventModule,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
