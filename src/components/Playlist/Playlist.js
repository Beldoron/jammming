import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = (props) => {
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  };

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue="New Playlist" />
      <TrackList istRemoval onRemove={props.onRemove} playlistName={props.playlistName} tracks={props.playlistTracks} />
      <a className="Playlist-save" onClick={props.onSave} >SAVE TO SPOTIFY</a>
    </div>
  );
};

export default Playlist;
