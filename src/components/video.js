import React, { Component } from 'react';
import '../css/video.css';

class Video extends Component {

  openVideo = (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(url, '_blank');
  }

  render() {
    const title = this.props.video.snippet.title;
    const description = this.props.video.snippet.description;
    const imgUrl = this.props.video.snippet.thumbnails.medium.url;
    const videoId = this.props.video.id.videoId;

    return(
      <div className="video">
        <h4 className="title" onClick={() => this.openVideo(videoId)}> {title} </h4>
        <img onClick={() => this.openVideo(videoId)} src={imgUrl} alt={description}/>
      </div>
    );
  }
}

export default Video;
