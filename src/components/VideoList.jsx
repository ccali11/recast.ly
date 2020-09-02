
import VideoListEntry from './VideoListEntry.js';


var VideoList = (prop) => (
  <div className="video-list" onClick={prop.onClick} >
    {prop.videos.map( (video) => (
      <VideoListEntry video={video}/>
    ))}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
// ReactDOM.render(<VideoList videos={exampleVideoData}/>, document.getElementsByClassName('col-md-5'));
export default VideoList;