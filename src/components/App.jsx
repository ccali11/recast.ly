import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    // Initialize State
    this.state = {
      playing: exampleVideoData[2]
    };
  }

  onVideoClick(e) {
    var title = $(e.target).text(); // Search for this title within the exampleVideoData and return video object
    var currentIndex = 0;
    var videoIndex = exampleVideoData.reduce((index, video) => {
      if (video.snippet.title === title) {
        index = currentIndex;
        return index;
      }
      currentIndex++;
      return index;
    }, null);

    this.setState({
      playing: exampleVideoData[videoIndex]
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
          <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.playing} /></h5></div>
        </div>
        <div className="col-md-5">
          <div onClick={this.onVideoClick.bind(this)}><h5><em>videoList</em><VideoList videos={exampleVideoData}/></h5></div>
        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
