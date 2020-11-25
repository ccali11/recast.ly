
import VideoListEntry from './VideoListEntry.js';

const VideoList = ({videos, onClick }) => (
  <div className="video-list" onClick={() => { onClick(); }} >
    {videos.map( (video) => (
      <VideoListEntry key={video.id.videoId} video={video} onClick={onClick} />
    ))}
  </div>
);

// Tells other developers what `props` a component expects
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;