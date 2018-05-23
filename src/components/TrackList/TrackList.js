
import React, { Component } from 'react';
import Track from '../Track/Track';
import './TrackList.css';


const TrackList = props => (
  <div className="TrackList">


    { props.tracks.map(track =>
              (<Track
                key={track.id}
                name={track.name}
              />),
          )}

  </div>
);

export default TrackList;
