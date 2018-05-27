import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import SearchBar from './components/SearchBar/SearchBar';
import Spotify, { GetAccesToken, Search } from './utl/Spotify';

import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Track from './components/Track/Track';
import TrackList from './components/TrackList/TrackList';


import './App.css';


class App extends Component {
 state = {
   searchTerm: '',
   searchResults: [

   ],
   playlistTracks: [

   ],
   playlistName: [],
 };

 getAccessToken = () => {
   Spotify.GetAccessToken();
 }

 search = (term) => {
   Spotify.Search(term)
     .then(trackArray =>
       this.setState({
         searchResults: trackArray,
       }));
 }

 addTrack = (track) => {
   const arr = this.state.playlistTracks;
   if (arr.length === 0) {
     arr.push(track); this.setState({
       playlistTracks: arr,
     });
   } else if (arr.find(savedTrack => savedTrack.id !== track.id)) {
     if (arr.find(savedTrack => savedTrack.id === track.id)) {
       return null;
     }
     arr.push(track);
     this.setState({
       playlistTracks: arr,
     });
   } return console.log('Hey');
 }


  removeTrack = (track) => {
    const arr = this.state.playlistTracks;

    const indexOfTrack = arr.indexOf(track);
    arr.splice(indexOfTrack, 1);
    this.setState({
      playlistTracks: arr,
    });
  }

  updatePlaylistName = (name) => {
    this.setState({
      playlistName: name,
    });
  }

  savePlaylist = () => {
    const trackURIs = [];
    this.state.playlistTracks.forEach(element =>
      trackURIs.push(element.uri),
    );
    return trackURIs;
  }

  render() {
    return (

      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <button onClick={this.getAccessToken}> getAccessToken </button>


          <SearchBar
            onSearch={this.search}
            searchTerm={this.state.searchTerm}
          />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
