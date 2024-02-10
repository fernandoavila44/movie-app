import { TCredits } from "../../types/creditsCasts";
import { TMovieDetail } from "../../types/movies";
import { getCrewJob } from "../../utils/getCrewJob";
import { getFullYear } from "../../utils/getFullYear";
import { getHoursAndMinutes } from "../../utils/getHoursAndMinutes";
import { getMainCast } from "../../utils/getMainCast";
import styles from "./component.module.scss";

type TProps = {
  movieDetail?: TMovieDetail
  movieCredits?: TCredits
}

const TopDetail: React.FC<TProps> = ({ movieDetail, movieCredits }) => {

  const { backdrop_path, title, release_date, runtime, overview, genres } = movieDetail as TMovieDetail
  const { crew, cast } = movieCredits as TCredits;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.topDetail}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          backgroundPosition: "10% 50%",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className={styles.innerTopDetail}>
          <div>
            <h2>{title}</h2>
            <span className={styles.releaseAndDuration}>{`${getFullYear(release_date)} - ${getHoursAndMinutes(runtime)}`}</span>
            <div>
              {genres.map((genre, index) => (
                <span
                  key={`${genre}_${index}`}
                  className={styles.genresItems}
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomDetail}>
        <div>
          <p className={styles.overview}>{overview}</p>
          <div className={styles.castAndCrewItems}>
            <div className={styles.jobsColumn}>
              <span>Director: </span>
              <span>Writer: </span>
              <span>Cast: </span>
            </div>
            <div className={styles.nameColumn}>
              <p>{`${getCrewJob(crew, "Director")}`}</p>
              <p>{`${getCrewJob(crew, "Writer")}`}</p>
              <p>{`${getMainCast(cast, 3)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopDetail;