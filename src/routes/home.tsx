import { useQuery } from "@tanstack/react-query";
import MoviesRepository from "../repositories/movies.repository";
import MoviesHome from "../components/moviesHome/component";

const Home = () => {

  const { isPending: pendingTrendingMovies, error: errorTrendingMovies, data: dataTrendingMovies } = useQuery({
    queryKey: ['trendingMoviesData'],
    queryFn: () =>
      MoviesRepository.getTrendingMovies()
  })

  const { isPending: pendingGenres, error: errorGenres, data: dataGenres } = useQuery({
    queryKey: ['genresData'],
    queryFn: () =>
      MoviesRepository.getGenreList()
  })

  return (
    <MoviesHome
      trendingMovies={{ pendingTrendingMovies, dataTrendingMovies, errorTrendingMovies }}
      genres={{ pendingGenres, dataGenres, errorGenres }}
    />
  )
}

export default Home;