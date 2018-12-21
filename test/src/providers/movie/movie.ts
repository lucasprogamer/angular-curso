import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';



/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  apiCredentials: any;

  constructor(
    public http: HttpClient,
    public configProvider: ConfigProvider,
    ) {
      this.apiCredentials =  configProvider.getApiCredentials();
  }



  getLatestMovies() {
    return this.http.get(`${ this.apiCredentials.basePath }/movie/popular?api_key=${this.apiCredentials.key}&language=${this.apiCredentials.lang}`);
  }

  getMovieDetails(id) {
    return this.http.get(`${ this.apiCredentials.basePath }/movie/${id}?api_key=${this.apiCredentials.key}&language=${this.apiCredentials.lang}`);
  }

}
