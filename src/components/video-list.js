import React, { Component } from 'react';
import Video from './video'
import '../css/video-list.css';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoList: [],
      activePage: 1,
      currentPageNumber: 1,
      numItemsPerPage: 10,
    };
  }

  render() {
    const videos = this.props.videoList.map(video => {
      return <Video key={video.id.videoId} video={video}/>
    });
    return(
      <div className="videoList">{videos}</div>
    );
  }
}

export default VideoList;
