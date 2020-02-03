import React, { Component } from 'react';
import Home from 'Src/containers/Home';
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default App;
