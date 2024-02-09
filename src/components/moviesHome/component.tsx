import MoviesRepository from "../../repositories/movies.repository";
import { useQuery } from "@tanstack/react-query";
import TrendingMovies from "../trendingMovies/component";
import CustomListMovies from "../customListMovies/component";
import styles from "./component.module.scss";

const MoviesHome: React.FC = () => {

  const { isPending: pendingTrendingMovies, error: errorTrendingMovies, data: dataTrendingMovies, isFetching: fetchingTrendingMovies } = useQuery({
    queryKey: ['trendingMoviesData'],
    queryFn: () =>
      MoviesRepository.getTrendingMovies()
  })

  const { isPending: pendingGenres, error: errorGenres, data: dataGenres, isFetching: fetchingGenres } = useQuery({
    queryKey: ['genresData'],
    queryFn: () =>
      MoviesRepository.getGenreList()
  })

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