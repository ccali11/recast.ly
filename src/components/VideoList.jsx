import VideoListEntry from './VideoListEntry.js';

const VideoList = ({videos, onVideoClick}) => (
  <div className="video-list" >
    {videos.map( (video) => (
      <VideoListEntry videos={videos} key={video.id.videoId} video={video} onVideoClick={onVideoClick}/>
    ))}
  </div>
);

// Tells other developers what `props` a component expects
// VideoList.propTypes = {
//   videos: PropTypes.array.isRequired
// };

export default VideoList;