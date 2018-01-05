import React, { Component } from 'react';
import CommentHeader from './CommentHeader'
import CommentMain from './CommentMain'
import CommentFooter from './CommentFooter'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentHeader />
        <CommentMain />
        <CommentFooter />
      </div>
    );
  }
}

export default App;
