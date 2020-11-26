import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      playing: null
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('the yankees win john sterling');
  }

  getYouTubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 10
    };

    searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        playing: videos[0]
      });
    });
  }

  onVideoClick(video) {
    this.setState({
      playing: video
    });
  }

  render () {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5> <VideoPlayer video={this.state.playing} /></h5></div>
        </div>
        <div className="col-md-5">
          <div onClick={this.onVideoClick.bind(this)}><h5><VideoList videos={this.state.videos}/></h5></div>
        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
