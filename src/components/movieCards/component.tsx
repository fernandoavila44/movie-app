import { Link } from "react-router-dom"
import styles from "./component.module.scss"

type TProps = {
  movieGenre: (string | null)[]
  movieName: string
  movieImage: string
  movieId: number
  dynamicGridClass?: number
}

const MovieCard: React.FC<TProps> = ({ movieGenre, movieName, movieImage, movieId, dynamicGridClass }) => {

  return (
    <Link to={`/movie/${movieId}`} className={dynamicGridClass === 4 ? styles.double : ''}>
      <article
        className={`${styles.movieCard}`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780${movieImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className={styles.movieInfo}>
          <span>{movieGenre.toString()}</span>
          <h2>{movieName}</h2>
        </div>
      </article>
    </Link>
  )
}

export default MovieCard;