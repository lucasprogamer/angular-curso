import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {


 @Input('movie') movie ;


  constructor(
    public navCtrl: NavController
  ) {
    console.log(this.movie);

  }




}
