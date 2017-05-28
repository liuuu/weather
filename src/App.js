import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';
import Lists from './components/Lists';


class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <Lists cities={this.props.cities}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cities: state.cities,
  }
}



export default connect(mapStateToProps)(App);
