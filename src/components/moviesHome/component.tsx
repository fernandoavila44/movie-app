import TrendingMovies from "../trendingMovies/component";
import CustomListMovies from "../customListMovies/component";
import styles from "./component.module.scss";
import { TGlobalGenres, TGlobalMoviesPayload } from "../../types/movies";

type TProps = {
  pendingTrendingMovies: boolean
  errorTrendingMovies: Error | null
  dataTrendingMovies?: TGlobalMoviesPayload
  pendingGenres: boolean
  errorGenres: Error | null
  dataGenres?: TGlobalGenres
}

const MoviesHome: React.FC<TProps> = ({ ...props }) => {

  const { pendingTrendingMovies, pendingGenres, dataTrendingMovies, dataGenres } = props;

  return (
    <section className={styles.homeSection}>
      {pendingTrendingMovies || pendingGenres && <p>Loading trending movies...</p>}
      {dataTrendingMovies && dataGenres &&
        <TrendingMovies
          dataMovies={dataTrendingMovies.results.slice(0, 5)}
          genres={dataGenres}
        />
      }
      <h3 className={styles.moreMoviesTitle}>More like this</h3>
      {pendingTrendingMovies || pendingGenres && <p>Loading trending movies...</p>}
      {dataTrendingMovies && dataGenres &&
        <CustomListMovies
          dataMovies={dataTrendingMovies.results.slice(6)}
          genres={dataGenres}
        />
      }
    </section>
  )
}

export default MoviesHome;