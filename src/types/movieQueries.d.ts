import { TCredits } from "./creditsCasts"
import { TGlobalGenres, TGlobalMoviesPayload, TMovieDetail } from "./movies"

export interface TMovieDetailQuerie {
  detailMovie: {
    pendingDetailMovie: boolean
    errorDetailMovie: Error | null
    movieDetail?: TMovieDetail
  }
  credits: {
    pendingCredits: boolean
    errorCredits: Error | null
    movieCredits?: TCredits
  }
  recommendations: {
    pendingRecommendatios: boolean
    errorRecommendatios: Error | null
    dataRecommendatios?: TGlobalMoviesPayload
  }
  genres: {
    pendingGenres: boolean
    errorGenres: Error | null
    dataGenres?: TGlobalGenres
  }
}