import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PerfilPage } from '../perfil/perfil';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  rootPage = PerfilPage;

  page;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }
  openAbout() {
    this.navCtrl.push(AboutPage);
  }

}
