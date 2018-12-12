import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCursosComponent } from './criar-cursos/criar-cursos.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarCursosComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
