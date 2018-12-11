import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaStyleComponent } from './diretiva-style/diretiva-style.component';
import { FormsModule } from '@angular/forms';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { CustomizadasComponent } from './diretivas/customizadas/customizadas.component';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { SharedDirective } from './shared.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    SwitchCaseComponent,
    DiretivaNgforComponent,
    DiretivaStyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    CustomizadasComponent,
    DiretivasCustomizadasComponent,
    SharedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
