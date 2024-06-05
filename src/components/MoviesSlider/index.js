// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {moviesList, category} = props
  const filteredMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === category,
  )

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          {filteredMovies.map(eachMovie => (
            <div key={eachMovie.id} className="list-container">
              <MovieItem movieDetails={eachMovie} />
            </div>
          ))}
        </div>
      </Slider>
    </div>
  )
}

const SampleNextArrow = props => {
  const {className, style, onClick} = props
  return (
    <div>
      className={className}
      style={{...style, display: 'block', background: 'black'}}
      onClick={onClick}
    </div>
  )
}

const SamplePrevArrow = props => {
  const {className, style, onClick} = props
  return (
    <div>
      className={className}
      style={{...style, display: 'block', background: 'black'}}
      onClick={onClick}
    </div>
  )
}

export default MoviesSlider
