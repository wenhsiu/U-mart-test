import React, { Component } from 'react';
import '../css/search-bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  inputChange = (event) => {
    this.setState({ keyword: event.target.value });
  }

  onClick = (event) => {
    event.preventDefault();
    this.props.videoSearch(this.state.keyword);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="input-field"
          placeholder="熱門音樂"
          value={this.props.keyword}
          onChange={this.inputChange}
        />
        <button
          className="search"
          onClick={this.onClick}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;