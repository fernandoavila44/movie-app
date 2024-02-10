import CustomListMovies from "../customListMovies/component";
import { isEmpty } from "ramda";
import { TGlobalGenres, TGlobalMoviesPayload, TMovieDetail } from "../../types/movies";
import { TCredits } from "../../types/creditsCasts";
import styles from "./component.module.scss";
import TopDetail from "../topDetail/component";

type TProps = {
  detailMovie: {
    pendingDetailMovie: boolean
    errorDetailMovie: Error | null
    movieDetail?: TMovieDetail
  }
  credits: {
    pendingCredits: boolean
    errorCredits: Error | null
    movieCredits?: TCredits
  }
  recommendations: {
    pendingRecommendatios: boolean
    errorRecommendatios: Error | null
    dataRecommendatios?: TGlobalMoviesPayload
  }
  genres: {
    pendingGenres: boolean
    errorGenres: Error | null
    dataGenres?: TGlobalGenres
  }
}

const MovieDetail: React.FC<TProps> = ({ detailMovie, credits, recommendations, genres }) => {

  const { pendingDetailMovie, movieDetail, errorDetailMovie } = detailMovie
  const { pendingCredits, movieCredits, errorCredits } = credits
  const { pendingRecommendatios, dataRecommendatios, errorRecommendatios } = recommendations
  const { pendingGenres, dataGenres, errorGenres } = genres

  if (errorDetailMovie || errorCredits || errorRecommendatios || errorGenres)
    return <p>An error has ocurred!</p>

  return (
    <section className={styles.detailSection} >
      {pendingDetailMovie || pendingCredits && <p>Loading movie info...</p>}
      {movieDetail && movieCredits &&
        <TopDetail
          movieDetail={movieDetail}
          movieCredits={movieCredits}
        />}
      <h3 className={styles.recommendationsTitle}>Recommendatios</h3>
      {pendingRecommendatios || pendingGenres && <p>Loading recommendatios...</p>}
      {isEmpty(dataRecommendatios?.results) && <p>No recommendations available for this movie!</p>}
      {dataRecommendatios && dataGenres &&
        <CustomListMovies
          dataMovies={dataRecommendatios.results}
          genres={dataGenres}
        />
      }
    </section>
  )
}

export default MovieDetail;