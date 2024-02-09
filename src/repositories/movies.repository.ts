import { AxiosRequestConfig } from "axios";
import { mergeRight } from "ramda";
import Api from "../core/api.core";
import config from "../config/config";
import { TGenres, TGlobalGenres, TGlobalMoviesPayload } from "../types/movies";


export class MoviesRepository extends Api{
  protected readonly endpoints = {
    trendingMovies: "trending/movie/day",
    genreList: "genre/movie/list",
    movieDetail: "/movie/{movie_id}",
    movieCreditsCast: "movie/{movie_id}/credits",
    recommendatios: "movie/{movie_id}/recommendations"
  }

  constructor (baseOptions: AxiosRequestConfig = {}){
    super(mergeRight({baseURL:config.apiUrl}, baseOptions));
  }

  async getTrendingMovies(): Promise<TGlobalMoviesPayload>{
    return this.get<TGlobalMoviesPayload>(this.endpoints.trendingMovies,
      {
        headers: { Authorization: `Bearer ${config.apiToken}` },
      },
    ).then((response) => response.data);
  }

  async getGenreList(): Promise<TGlobalGenres>{
    return this.get<TGlobalGenres>(this.endpoints.genreList,
      {
        headers: { Authorization: `Bearer ${config.apiToken}` },
      },
    ).then((response) => response.data);
  }
}

export default new MoviesRepository;