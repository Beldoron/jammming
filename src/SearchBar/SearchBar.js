import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <StyledSearchBar className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </StyledSearchBar>
    );
  }
}


const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.94rem;
  margin-bottom: 6.33rem;
& input {
  width: 287px;
  padding: .88rem 0;
  border: 1px solid #fff;
  border-radius: 3px;
  margin-bottom: 2.22rem;
  color: #010c3f;
  text-align: center;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
}
& a {
  cursor: pointer;
  width: 8.11rem;
  padding: .77rem 0;
  border-radius: 54px;
  background-color: #010c3f;
  text-align: center;
  font-size: .833rem;
  transition: background-color .25s;
  & a:hover {
    background-color: rgba(108, 65, 233, .7);
  }
}

`;