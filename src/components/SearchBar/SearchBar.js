import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  state = {
    searchTerm: '',
  };
  handleTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  pressEnter = (event) => {
    const keyPressed = event.keyCode || event.which;
    const getKeyPressed = event.key;
    if (keyPressed === 13 || getKeyPressed === 'Enter') {
      this.props.onSearch(this.state.searchTerm); 
    }
  };

  pressButton = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };


  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} onKeyPress={this.pressEnter} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.pressButton} href="#">SEARCH</a>
      </div>
    );
  }
}

