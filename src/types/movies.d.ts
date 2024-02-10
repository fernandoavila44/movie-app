export interface TMovies {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TGenres {
  id: number;
  name: string
}

export interface TGlobalGenres {
  genres: TGenres[]
}

export interface TGlobalMoviesPayload {
  page: number;
  results: TMovies[];
  total_pages: number;
  total_results: number;
}

export interface TMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: TGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TProductionCompany[];
  production_countries: TProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: TSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface TProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface TSpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
