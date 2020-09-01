// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import VideoList from './components/videoList.js';
import exampleVideoData from './data/exampleVideoData.js';


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<VideoList videos={exampleVideoData} />, document.getElementsByClassName('col-md-5')[0]);
// commnet added

