import { useParams } from "react-router-dom"
import MoviesRepository from "../repositories/movies.repository"
import { useQuery } from "@tanstack/react-query"
import MovieDetail from "../components/movieDetail/component"
import { useEffect } from "react"

const MovieDetailPage = () => {

  const { movieId } = useParams()

  const { isPending: pendingDetailMovie, error: errorDetailMovie, data: movieDetail, refetch } = useQuery({
    queryKey: ['detailMovie'],
    queryFn: () =>
      MoviesRepository.getMovieDetail(movieId as string)
  })

  const { isPending: pendingCredits, error: errorCredits, data: movieCredits } = useQuery({
    queryKey: ['creditsByMovie'],
    queryFn: () =>
      MoviesRepository.getCreditsByMovie(movieId as string)
  })

  const { isPending: pendingRecommendatios, error: errorRecommendatios, data: dataRecommendatios } = useQuery({
    queryKey: ['recommendatiosByMovie'],
    queryFn: () =>
      MoviesRepository.getRecommendationsByMovie(movieId as string)
  })

  const { isPending: pendingGenres, error: errorGenres, data: dataGenres } = useQuery({
    queryKey: ['genresData'],
    queryFn: () =>
      MoviesRepository.getGenreList()
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    refetch();
  }, [movieId, refetch]);

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