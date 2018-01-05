import React, { Component } from "react";
import "./CommentMain.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Information from "./Routes/Information";
import Share from "./Routes/Share";

class CommentMain extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <nav className="navigate">
            <div>name</div>
            <div>
              <Link to="/home">首页</Link>
            </div>
            <div>
              <Link to="/information">目录</Link>
            </div>
            <div>
              <Link to="/share">分享</Link>
            </div>
            <div>
              <Link to="/detail">详情</Link>
            </div>
          </nav>
          <Redirect push to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/information" component={Information} />
          <Route path="/share" component={Share} />
          <Route path="/detail" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default CommentMain;
