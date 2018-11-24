import React from 'react';

// class Search extends React.Component {

  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   value: ''
  //   // };
  // }

  // handleInputChange(e) {
  //   this.props.handleSearchInputChange(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }
var Search = ({handleSearchInputChange}) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      //value={event.target.value}
      onChange={(event) => {handleSearchInputChange(event.target.value)}}
      //re-write to dispatch actions instead of handleInputChange
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
)

export default Search;
