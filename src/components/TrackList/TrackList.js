
import React from 'react';
import Track from '../Track/Track';

import './TrackList.css';


const TrackList = props => (
  <div className="TrackList">

    { props.tracks.map(track =>
              (<Track
                key={track.key}
                track={track}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                isRemoval={props.isRemoval}
              />),
          )}

  </div>
);

export default TrackList;
