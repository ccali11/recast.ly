import VideoListEntry from './VideoListEntry.js';

const VideoList = ({videos }) => (
  <div className="video-list" >
    {videos.map( (video) => (
      <VideoListEntry key={video.id.videoId} video={video} />
    ))}
  </div>
);

// Tells other developers what `props` a component expects
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;