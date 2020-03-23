import React, { Component } from 'react';
import youtube from './api/youtube';
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import Pagination from "./components/pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';


const API_KEY = 'YOUR_API_KEY'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoList: [],
      currentList: [],
      keyword: '' ,
      totalItems: 0,
      activePage: 1,
      currentPage: 1,
      numVideosPerPage: 10,
    };
  }

  async fetchVideos(keyword) {
    const result = await youtube.get('/search', {
      params: {
        part: "snippet",
        maxResults: 30,
        key: API_KEY,
        q: keyword
      }
    });
    this.setState({ 
      videoList: result.data.items,
      totalItems: result.data.items.length
    });
    this.setCurrentList(this.state.currentPage);
  }

  searchVideo = (keyword) => {
    this.fetchVideos(keyword);
  }

  handlePageChange = (event) => {
    console.log(Number(event.target.id));
    this.setState({ activePage: event.target.id});
    this.setCurrentList(event.target.id);
  }

  setCurrentList(page) {
    const { numVideosPerPage, videoList } = this.state;
    const indexOfLastVideo = page * numVideosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - numVideosPerPage;
    const currentList = videoList.slice(indexOfFirstVideo, indexOfLastVideo);
    this.setState({ currentList });
  }

  pageNumbers() {
    const pages = [];
    for (let i = 1; i <= Math.ceil(this.state.totalItems / this.state.numVideosPerPage); i++) {
      pages.push(i);
    }
    return pages;
  }

  render() {
    return (
      <div className="App">
        <SearchBar videoSearch={this.searchVideo}/>
        <VideoList videoList={this.state.currentList}/>
        <Pagination pageNumbers={this.pageNumbers()} changePage={this.handlePageChange}/>
      </div>
    );
  }
}

export default App;
