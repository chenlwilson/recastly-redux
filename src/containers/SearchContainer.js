import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.currentVideo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSearchInputChange: (value) => {
      dispatch(handleSearchChange(value));
    }
  };
};
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
