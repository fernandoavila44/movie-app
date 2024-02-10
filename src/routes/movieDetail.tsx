import { useParams } from "react-router-dom"
import MoviesRepository from "../repositories/movies.repository"
import { useQuery } from "@tanstack/react-query"
import MovieDetail from "../components/movieDetail/component"
import { useEffect } from "react"

const MovieDetailPage = () => {

  const { movieId } = useParams()

  const { isPending: pendingDetailMovie, error: errorDetailMovie, data: movieDetail, refetch: refetchDetailMovie } = useQuery({
    queryKey: ['detailMovie'],
    queryFn: () =>
      MoviesRepository.getMovieDetail(movieId as string)
  })

  const { isPending: pendingCredits, error: errorCredits, data: movieCredits, refetch: refetchCredits } = useQuery({
    queryKey: ['creditsByMovie'],
    queryFn: () =>
      MoviesRepository.getCreditsByMovie(movieId as string)
  })

  const { isPending: pendingRecommendatios, error: errorRecommendatios, data: dataRecommendatios, refetch: refetchRecommendatios } = useQuery({
    queryKey: ['recommendatiosByMovie'],
    queryFn: () =>
      MoviesRepository.getRecommendationsByMovie(movieId as string)
  })

  const { isPending: pendingGenres, error: errorGenres, data: dataGenres, refetch: refetchGenres } = useQuery({
    queryKey: ['genresData'],
    queryFn: () =>
      MoviesRepository.getGenreList()
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    refetchDetailMovie();
    refetchCredits();
    refetchRecommendatios();
    refetchGenres;
  }, [movieId, refetchCredits, refetchDetailMovie, refetchGenres, refetchRecommendatios]);

  return (
    <MovieDetail
      detailMovie={{ pendingDetailMovie, errorDetailMovie, movieDetail }}
      credits={{ pendingCredits, errorCredits, movieCredits }}
      recommendations={{ pendingRecommendatios, errorRecommendatios, dataRecommendatios }}
      genres={{ pendingGenres, errorGenres, dataGenres }}
    />
  )
}

export default MovieDetailPage;