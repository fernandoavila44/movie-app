import { TGlobalGenres } from "../types/movies";

export const getGenreNames = (
  allGenres: TGlobalGenres,
  genresByMovie: number[],
) => {
  const genreNames = genresByMovie.map((genreId) => {
    const foundGenre = allGenres.genres.find((genre) => genre.id === genreId);
    return foundGenre ? foundGenre.name : "";
  });

  return genreNames.slice(0, 1)
}