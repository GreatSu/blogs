import React, { Component } from 'react';
import CommentHeader from './CommentHeader'
import CommentMain from './CommentMain'
import CommentFooter from './CommentFooter'
import Mask from './component/Mask'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mask/>
        <CommentHeader />
        <CommentMain />
        <CommentFooter />
      </div>
    );
  }
}

export default App;
