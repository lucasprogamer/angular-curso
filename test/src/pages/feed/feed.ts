import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetailMoviePage } from '../detail-movie/detail-movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})

export class FeedPage {

  movieList =   new Array<any>();
  movie;
  loader;
  refresher;
  isRefreshing: boolean;
  page:number;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {

  }

  ionViewDidEnter() {
    this.loadMovies();
  }


  /**
   * Inicia o loading
   */
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando",
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

  /**
   *  Elemento de refresh
   * @param refresher
   */
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadMovies();

  }

  /**
   * Abre os detalhes do filme
   * @param movie
   */
  openDetails(movie) {
    this.navCtrl.push(DetailMoviePage, { id: movie.id });
  }

  /**
   * Carrega os filmes
   */
  loadMovies(page){
    this.presentLoading();

    this.movieProvider.getLatestMovies(page).subscribe(
      data => {
        const response = (data as any);

        this.movieList = response.results;
        console.log(this.movieList)
        this.closeLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
          this.page++;
        }
      },
      error => {
        console.log(error);
        this.closeLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    );

  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.loadMovies(this.page);
    infiniteScroll.complete();
  }
}
