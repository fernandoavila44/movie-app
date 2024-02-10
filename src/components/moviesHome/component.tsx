import TrendingMovies from "../trendingMovies/component";
import CustomListMovies from "../customListMovies/component";
import styles from "./component.module.scss";
import { TGlobalGenres, TGlobalMoviesPayload } from "../../types/movies";

type TProps = {
  trendingMovies: {
    pendingTrendingMovies: boolean
    errorTrendingMovies: Error | null
    dataTrendingMovies?: TGlobalMoviesPayload
  },
  genres: {
    pendingGenres: boolean
    errorGenres: Error | null
    dataGenres?: TGlobalGenres
  }
}

const MoviesHome: React.FC<TProps> = ({ trendingMovies, genres }) => {

  const { pendingTrendingMovies, dataTrendingMovies, errorTrendingMovies } = trendingMovies
  const { pendingGenres, dataGenres, errorGenres } = genres

  if (errorTrendingMovies || errorGenres)
    return <p>An error has ocurred!</p>

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