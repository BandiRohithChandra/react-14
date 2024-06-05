// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div className="list-container">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </div>
        }
        className="popup-content"
      >
        {close => (
          <div>
            <button
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
