import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  movieID: number;
  loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
     ) {}

  ionViewDidLoad() {
    this.loadMovie();
  }

    /**
   * Inicia o loading
   */
  presentLoading() {
    this.loader = this.loadingCtrl.create({
       content: 'carregando',
       spinner: 'crescent',
    });
    this.loader.present();

  }

    /**
   * fecha o loading
   */
  closeLoading() {
    this.loader.dismiss();
  }

   loadMovie() {
    // this.presentLoading();

    this.movieID = this.navParams.get("id");

    this.movieProvider.getMovieDetails(this.movieID).subscribe(
      async data => {
         this.movie = data;
        // this.closeLoading();
        console.log(this.movie);
        },
        error => {
          console.log(error);
          this.closeLoading();
      }
    );
  }

}
