// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )

    const comedyMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )

    return (
      <div className="prime-video-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-video"
          />
        </div>
        <div className="movies-container">
          <div>
            <h1>Action Movies</h1>
            <MoviesSlider moviesList={actionMovies} category="ACTION" />
            <h1>Comedy Movies</h1>
            <MoviesSlider moviesList={comedyMovies} category="COMEDY" />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
