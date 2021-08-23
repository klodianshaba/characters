import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from "../modules/material/material.module";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
      MaterialModule
    ]
})
export class CoreModule { }
