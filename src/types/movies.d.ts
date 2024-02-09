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
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TGenres {
  id: number;
  name: string
}

export interface TGlobalGenres {
  genres:TGenres[] 
}

export interface TGlobalMoviesPayload {
  page: number;
  results: TMovies[];
  total_pages: number;
  total_results: number;
}