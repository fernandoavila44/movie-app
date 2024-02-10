import { AxiosRequestConfig } from "axios";
import { mergeRight } from "ramda";
import Api from "../core/api.core";
import config from "../config/config";
import { TGlobalGenres, TGlobalMoviesPayload, TMovieDetail } from "../types/movies";
import { TCredits } from "../types/creditsCasts";

export class MoviesRepository extends Api {
  protected readonly endpoints = {
    trendingMovies: "trending/movie/day",
    genreList: "genre/movie/list",
    movieDetail: "/movie/{movie_id}",
    movieCreditsCast: "movie/{movie_id}/credits",
    recommendatios: "movie/{movie_id}/recommendations",
    genresData: "genre/movie/list",
    movieDetail1: "/movie/{movie_id}",
    creditsByMovie: "movie/{movie_id}/credits",
    recommendationsByMovie: "movie/{movie_id}/recommendations"
  }

  constructor(baseOptions: AxiosRequestConfig = {}) {
    super(mergeRight({ baseURL: config.apiUrl }, baseOptions));
  }

  protected getHeaders() {
    return { Authorization: `Bearer ${config.apiToken}` };
  }

  async getTrendingMovies(): Promise<TGlobalMoviesPayload> {
    return this.get<TGlobalMoviesPayload>(this.endpoints.trendingMovies,
      {
        headers: this.getHeaders(),
      },
    ).then((response) => response.data);
  }

  async getGenreList(): Promise<TGlobalGenres> {
    return this.get<TGlobalGenres>(this.endpoints.genreList,
      {
        headers: this.getHeaders(),
      },
    ).then((response) => response.data);
  }

  async getMovieDetail(movieId: string): Promise<TMovieDetail> {
    return this.get<TMovieDetail>(this.endpoints.movieDetail.replace("{movie_id}", movieId),
      {
        headers: this.getHeaders(),
      },
    ).then((response) => response.data);
  }

  async getCreditsByMovie(movieId: string): Promise<TCredits> {
    return this.get<TCredits>(this.endpoints.movieCreditsCast.replace("{movie_id}", movieId),
      {
        headers: this.getHeaders(),
      },
    ).then((response) => response.data);
  }

  async getRecommendationsByMovie(movieId: string): Promise<TGlobalMoviesPayload> {
    return this.get<TGlobalMoviesPayload>(this.endpoints.recommendatios.replace("{movie_id}", movieId),
      {
        headers: this.getHeaders(),
      },
    ).then((response) => response.data);
  }
}


export default new MoviesRepository;