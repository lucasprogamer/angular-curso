import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the DetailMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
  providers: [MovieProvider]
})
export class DetailMoviePage {

   movie:  {};

  movieID;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider
     ) {
  }

  ionViewDidEnter(){
    this.movieID = this.navParams.get("id");

    this.movieProvider.getMovieDetails(this.movieID).subscribe(
      data => {
        this.movie = data;
        console.log(this.movie);

      },
      error => {
        console.log(error);
      }
    );
  }

}
