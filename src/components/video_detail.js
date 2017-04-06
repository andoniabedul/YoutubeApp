import React from "react";

const VideoDetails = ({ video }) => {
  if(!video){
    return(
      <div>Loading . . .</div>
    );
  } else {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return(
      <div className="video-details col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="panel panel-group details">
          <div className="panel panel-default">
            <div className="panel-heading"><h4><a href={`https://youtube.com/watch?v=${videoId}`}>{video.snippet.title}</a></h4>
            </div>
            <div className="panel-body">{video.snippet.description}</div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading"><h5>Details</h5></div>
            <div className="panel-body">
                Published by <a href={`https://youtube.com/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</a>
              <br></br>
              Published at {video.snippet.publishedAt}
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default VideoDetails;
