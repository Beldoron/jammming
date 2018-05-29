import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import SearchBar from './components/SearchBar/SearchBar';
import Spotify, { getAccesToken, search, savePlaylist } from './utl/Spotify';

import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Track from './components/Track/Track';
import TrackList from './components/TrackList/TrackList';


import './App.css';

class App extends Component {
 state = {
   searchResults: [],
   playlistName: 'New Playlist',
   playlistTracks: [
     {
       key: 2,
       name: 'Bob',
       artist: 'lost',
       album: 'semi',
       URI: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
     },
   ],
 };

 addTrack = (track) => {
   const arr = this.state.playlistTracks;
   if (arr.find(savedTrack => savedTrack.key === track.key)) {
     return;
   }
   arr.push(track);
   this.setState({
     playlistTracks: arr,
   });
 }

 removeTrack = (track) => {
   const arr = this.state.playlistTracks;

   const indexOfTrack = arr.indexOf(track);
   arr.splice(indexOfTrack, 1);
   this.setState({
     playlistTracks: arr,
   });
 }

 savePlayList = () => {
   const uriArray = this.state.playlistTracks.map(track => track.URI);
   Spotify.savePlaylist(this.state.playlistName, uriArray)
     .then(reset =>
       this.setState({
         playlistTracks: [],
         playlistName: 'New Playlist',
       }),
     );
 }

updatePlaylistName = (name) => {
  this.setState({
    playlistName: name,
  });
}

 search = (term) => {
   Spotify.search(term)
     .then((tracks) => {
       this.setState({
         searchResults: tracks,
       });
     },
     );
 }

 render() {
   return (

     <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">


         <SearchBar
           onSearch={this.search}
         />
         <div className="App-playlist">
           <SearchResults
             onAdd={this.addTrack}
             searchResults={this.state.searchResults}
           />
           <Playlist
             onNameChange={this.updatePlaylistName}
             onRemove={this.removeTrack}
             onSave={this.savePlayList}
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
