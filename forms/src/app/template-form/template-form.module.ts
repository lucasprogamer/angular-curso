import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlComponent } from '../campo-control/campo-control.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlComponent,


  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class TemplateFormModule { }
