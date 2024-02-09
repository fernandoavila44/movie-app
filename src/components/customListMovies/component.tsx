import { TGlobalGenres, TMovies } from "../../types/movies";
import { getGenreNames } from "../../utils/getGenreNames";
import MovieCard from "../movieCards/component";
import styles from "./component.module.scss";

type TProps = {
  dataMovies: TMovies[]
  genres: TGlobalGenres
}

const CustomListMovies: React.FC<TProps> = ({ dataMovies, genres }) => {

  return (
    <div className={styles.customListMovies}>
      {dataMovies.map((movie) => (
        <MovieCard
          key={`movie_${movie.id}`}
          movieGenre={getGenreNames(genres, movie.genre_ids, true)}
          movieName={movie.title}
          movieImage={movie.backdrop_path}
        />
      ))}
    </div>
  )
}

export default CustomListMovies;