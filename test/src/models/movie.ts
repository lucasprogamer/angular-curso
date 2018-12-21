
export class Movie {
    constructor(
      public id: number,
      public adult: boolean,
      public backdrop_pathhms: string,
      public belongs_to_collection: any,
      public budget: any,
      public genres: Array<any>,
      public homepage: string,
      public imdb_id: string,
      public original_language: string,
      public original_title: string,
      public overview: string,
      public popularity: number,
      public poster_path: string,
      public production_companies: Array<any>,
      public production_countries: Array<any>,
      public status: string,
      public tagline: any,
      public title: string,
      public video: boolean,
      public vote_average: number,
      public vote_count: number,
     ) {

      }
 }
