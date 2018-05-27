import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  state = {
    searchTerm: '',
  };
  search = (event) => {
    // event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  handleTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };
  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.search} href="#">SEARCH</a>
      </div>
    );
  }
}

