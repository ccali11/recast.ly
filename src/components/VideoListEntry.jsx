import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
var VideoListEntry = (prop) => {

  var onClick = (event) => {
    // event.target.firstChild.nodeValue === title of video
    // render clicked video as video currently playing
    var title = event.target.firstChild.nodeValue;
    var currentIndex = 0;
    var videoIndex = exampleVideoData.reduce( (index, videoItem) => {
      // access the title of the current video item
      var isClickedVideo = videoItem.snippet.title === title;
      if (isClickedVideo) {
        return currentIndex;
      } else {
        currentIndex++;
        return index;
      }
    }, null);
    console.log(videoIndex);

    //ReactDOM.render(<VideoPlayer videos={exampleVideoData[videoIndex]} />, document.getElementsByClassName('col-md-7')[0]);
  };

  // {video: snippet: {}}
  return ( <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={prop.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div onClick={onClick} className="video-list-entry-title">{prop.video.snippet.title}</div>
      <div className="video-list-entry-detail">{prop.video.snippet.description}</div>
    </div>
  </div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
