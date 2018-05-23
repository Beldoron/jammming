import React, { Component } from 'react';

import './Playlist.css';

export default class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue="New Playlist" />

        <a className="Playlist-save" href="www.deinemudder.de">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

