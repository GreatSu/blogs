import React, { Component } from "react";
import "./share.css";
import  imglist from './fenxiang'
import Showimg from './Showimg'
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";


class Share extends Component {




  render() {
    return (
      <div className="sharecontainer">
        {imglist.map((img) => (
          <div className="sharediv" key={img.id} >
            <Link to={"/share/"+img.id}>
            <img  src={img.url} alt=""  />
            </Link>
            <span>{img.name}</span>
          </div>
        ))}
        <Route path="/share/:id" component={Showimg} />
      </div>
    );
  }
}


export default Share;
