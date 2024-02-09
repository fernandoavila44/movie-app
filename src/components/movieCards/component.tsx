import styles from "./component.module.scss"

type TProps = {
  movieGenre: (string | null)[]
  movieName: string
  movieImage: string
  dynamicGridClass?: number
}

const MovieCard: React.FC<TProps> = ({ movieGenre, movieName, movieImage, dynamicGridClass }) => {

  console.log(dynamicGridClass)

  return (
    <article
      className={`${styles.movieCard} ${dynamicGridClass === 4 ? styles.double : ''}`}
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
  )
}

export default MovieCard;