import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPage } from '../pages/feed/feed';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { HttpClientModule } from '@angular/common/http';
import { MovieProvider } from '../providers/movie/movie';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { DetailMoviePageModule } from '../pages/detail-movie/detail-movie.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    IntroPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    DetailMoviePageModule,
    PerfilPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    IntroPage,
    HomePage,
    FeedPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
