import { TGlobalGenres } from "../types/movies";

export const getGenreNames = (
  allGenres: TGlobalGenres, 
  genresByMovie: number[],
  isPlain: boolean 
) => {
  const genreNames = genresByMovie.map((genreId) => {
    const foundGenre = allGenres.genres.find((genre) => genre.id === genreId);
    return foundGenre ? foundGenre.name : "";
  });

  return isPlain ? genreNames.slice(0,1) : genreNames 
}