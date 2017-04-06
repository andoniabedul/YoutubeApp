import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
  }
  render(){
    return (
      <div className="search-bar input-group">
        <span className="input-group-addon"><i className="fa fa-search"></i></span>
      <input className="form-control"        placeholder="Search something on Youtube"
        value={this.state.term}
        onChange={(e)=>this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTerm(term);
  }
}

export default SearchBar;
