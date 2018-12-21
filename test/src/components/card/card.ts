import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailMoviePage } from '../../pages/detail-movie/detail-movie';

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


 @Input('movieList') movieList ;


  constructor(
    public navCtrl: NavController
  ) {
  }

  openDetails(movie) {
    this.navCtrl.push(DetailMoviePage, { id: movie.id });
  }


}
