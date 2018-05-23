
import React, { Component } from 'react';
import './Track.css';


export default class Track extends Component {
  renderAction = (isRemoval) => {
    if (isRemoval === true) {
      return '-';
    } return '+';
  };


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3 />
          <p> | </p>
        </div>
        <a className="Track-action">{this.renderAction()} </a>
      </div>
    );
  }
}

// /* h3 => {this.props.track.name}
