/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

const SearchResults = props => (
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList onAdd={props.onAdd} isRemoval={false} tracks={props.searchResults} />
  </div>
);


SearchResults.protoType = {
  searchResults: PropTypes.array,
};

export default SearchResults;
