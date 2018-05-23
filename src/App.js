import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import SearchBar from './components/SearchBar/SearchBar';


import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Track from './components/Track/Track';
import TrackList from './components/TrackList/TrackList';


import './App.css';

class App extends Component {
 state = {
   searchResults: [{
     name: 'one',
     id: '1',
   }, {
     name: 'two',
     id: '2',
   },
   ],
 };

 render() {
   return (
     <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">
         <SearchBar />
         <Playlist />
         <SearchResults searchResults={this.state.searchResults} />
         <Track />
         <TrackList />
         <div className="App-playlist" />
       </div>
     </div>
   );
 }
}

export default App;
