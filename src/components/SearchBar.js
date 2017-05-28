import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class SearchBar extends React.Component {
  constructor(){
    super();

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSearch(this.input.value);
    this.input.value='';
  }

  render () {
    return (
      <div className="col-md-6 offset-md-3">

        <form className="input-group"  onSubmit={this.handleSubmit.bind(this)}>
          <input
            name="term"
            type="text"
            className="form-control"
            ref={(node) => this.input =node}
            placeholder="输入城市的名字 比如 beijing"
          />
          <span className="input-group-btn">
            <button className="btn btn-primary">search</button>
          </span>
        </form>
    </div>
    )

  }
}

export default connect(null, actions)(SearchBar);
