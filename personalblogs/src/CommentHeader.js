import React, { Component } from "react";
import "./CommentHeader.css";

class CommentHeader extends Component {
  render() {
    return (
      <div className="header">
        <Bgheader />
      </div>
    );
  }
}

class Bgheader extends Component {
  constructor() {
    super();
    this.state = {
      myname: "MEStar"
    };
  }

  render() {
    return (
      <div className="headbg">
        <div className="headbgTop">
          <div>
            <img src="./dist/img/mine.png" alt="" />
          </div>
          <div>{this.state.myname}</div>
          <div className="headbgleft">
            <img src="./dist/img/意见反馈.png" alt="" />
            <img src="./dist/img/搜索.png" alt="" />
            <input placeholder=" 请搜索关键词" />
          </div>
        </div>
        <Lunbotu />
      </div>
    );
  }
}
// 轮播图组件
let n = 0;
let nnn = 0;

class Lunbotu extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      duration: 300,
      isdown: false,
      prevx: 0,
      nextx:0
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.autoPlay = this.autoPlay.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount() {
    nnn = setInterval(this.autoPlay, 3000);
  }
  autoPlay() {
    n++;
    const imgwidth = document.querySelector(".imgwidth");
    if (n === 3) {
      this.setState({
        x: this.state.x - imgwidth.clientWidth * 2,
        duration: 300
      });
      // console.log("++++++++++++++"+this.state.x)
      clearInterval(nnn);
      setTimeout(() => {
        this.setState({ x: 0, duration: 0 }, () => {
          setTimeout(() => {
            this.setState({ duration: 300 });
          }, 300);
        });
      }, 2700);
      setTimeout(() => {
        nnn = setInterval(this.autoPlay, 3000);
      }, 600);
      n = 0;
    } else {
      this.setState({ x: this.state.x - imgwidth.clientWidth * 2 });
      // console.log(this.state.x)
    }
  }

  handleMouseMove(e) {
    const imgwidth = document.querySelector('.imgwidth').clientWidth
    e.preventDefault()
    clearInterval(nnn)
    this.setState({
      duration:0
    })

    // console.log(this.state.x)
    this.state.x = this.state.x - (this.state.prevx - e.clientX)
    this.setState({});
    this.state.prevx = e.clientX;
    
    if(this.state.x <= -(imgwidth-10)){
      this.setState({
        duration:300
      })
      this.state.x = -(imgwidth*2)
    }
  }

  handleMouseDown(e) {
    this.state.isdown = true;
    this.state.prevx = e.clientX;

    // e.preventDefault()
    // this.setState({
    //   isdown : true
    // })
    const pic = document.querySelector(".pic");
    pic.addEventListener("mousemove", this.handleMouseMove);
  }
  
  handleMouseUp(e) {
    this.state.isdown = false;
    const pic = document.querySelector(".pic");
    pic.removeEventListener("mousemove", this.handleMouseMove);
  }
  handleMouseLeave(e){
    this.state.isdown = false;
    const pic = document.querySelector(".pic");
    pic.removeEventListener("mousemove", this.handleMouseMove);
  }
  render() {
    return (
      <div className="container">
        <ul
          className="pic"
          style={{
            transform: `translate3d(${this.state.x}px,0,0)`,
            transitionDuration: `${this.state.duration}0ms`
          }}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseLeave}
        >
          <li>
            <img className="imgwidth" src="./dist/img/lunbo1.jpg" alt="" />
            <img src="./dist/img/lunbo2.jpg" alt="" />
          </li>
          <li>
            <img src="./dist/img/lunbo3.jpg" alt="" />
            <img src="./dist/img/lunbo4.jpg" alt="" />
          </li>
          <li>
            <img src="./dist/img/lunbo5.jpg" alt="" />
            <img src="./dist/img/lunbo6.jpg" alt="" />
          </li>
          <li>
            <img src="./dist/img/lunbo1.jpg" alt="" />
            <img src="./dist/img/lunbo2.jpg" alt="" />
          </li>
        </ul>
      </div>
    );
  }
}

export default CommentHeader;
