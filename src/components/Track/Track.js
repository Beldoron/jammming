
import React, { Component } from 'react';
import './Track.css';
import TrackList from '../TrackList/TrackList';


const Track = (props) => {
  const renderAction = () => {
    if (props.isRemoval === false) {
      return <a className="Track-action" onClick={addTrack}> + </a>;
    } return <a className="Track-action" onClick={removeTrack}> - </a>;
  };
  const addTrack = () => {
    props.onAdd(props.track);
  };
  const removeTrack = () => {
    props.onRemove(props.track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name} </h3>
        <p>{props.track.artist} | {props.track.album} </p>
      </div>
      {renderAction()}

    </div>
  );
};


export default Track;

