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
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightDirectiveDirective } from './shared/highlight-directive.directive';
import { HighlightDirective } from './shared/highlight.directive';

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
    DiretivasCustomizadasComponent,
    HighlightDirectiveDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
