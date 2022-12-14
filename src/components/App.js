import video from "../data/video.js";
import DisplayInfo from "./DisplayInfo.js";
import LikeDislikeBtn from "./LikeDislikeBtn"
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <DisplayInfo />
      <LikeDislikeBtn />
      <Comments video={video}/>
    </div>
  );
}

export default App;
