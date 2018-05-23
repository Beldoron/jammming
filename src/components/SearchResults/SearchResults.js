/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

const SearchResults = props => (
  <div className="SearchResults">
    <TrackList tracks={props.searchResults} />
  </div>
);


SearchResults.protoType = {
  searchResults: PropTypes.array,
};

export default SearchResults;
