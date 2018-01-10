import React, { Component } from "react";
import "./detail.css";

class Detail extends Component {
  render() {
    return (
      <div className="rongqi">
        <Detailleft />
        <Detailright />
      </div>
    );
  }
}

class Detailleft extends Component {
  render() {
    return (
      <section className="section">
        <div className="topdiv">
          <img
            className="mypic"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515390424067&di=0e846cb4e771a6d6a08d34a5ff35b2a0&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170811%2F52cb3033c2624f78bc4586fb7b6e0011_th.jpg"
            alt=""
          />
          <div className="rongqidivfour">
            <span>MEStar的博客</span>
            <div>姓名:速速速</div>
            <div>职业:速速速</div>
            <div>
              个人简介:啊速度爱USD一阿苏汇顶科技安慰，马上大家哈师大受打击安徽省大声道那暗示的话科技暗红色的氨基酸的华为内部，马上到傲剑狂刀或看瓦斯的家SD卡的阿萨德吧啊绝对是啊啊卡萨丁啊四大美女啊会计电算化啊实打实，你的吗烧烤师大胆上的那收到，按设计大师短上衣大声道科技hi午安可接受的卡萨丁啊，啥都没拿手科技暗红色的阿萨达哈会计师的话暗杀速度雅思的哈看似简单那速度慢无欠款金额环球网阿萨德按时阿萨德那，什么都能俺舍不得阿萨德刈但还是大神带你我没钱大神阿克江收到货我把俺舍不得安安说卡仕达我爸妈说大神我去打上大班索多姆女不弯明年十八案件会受到阿萨德就按我们那不是按时带带我艾迪康
            </div>
          </div>
        </div>
        <Leavemessage />
      </section>
    );
  }
}

class Detailright extends Component {
  render() {
    return (
      <div className="rightcontent">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515393983845&di=4e3eeddd45a448acabb9890127b9e5c4&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8ad4b31c8701a18bbf5af522942f07082838fe2e.jpg"
          alt=""
        />
        <div>博客分类</div>
        <div>旅游趣事</div>
        <div>学习资料</div>
        <div>分享图片</div>
        <div>生活小百科</div>
        <div>喜欢的音乐</div>
        <div>生活调味剂</div>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515393983845&di=4e3eeddd45a448acabb9890127b9e5c4&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8ad4b31c8701a18bbf5af522942f07082838fe2e.jpg"
          alt=""
        />
        <div>博客分类</div>
        <div>旅游趣事</div>
        <div>学习资料</div>
        <div>分享图片</div>
        <div>生活小百科</div>
        <div>喜欢的音乐</div>
        <div>生活调味剂</div>
      </div>
    );
  }
}

class Leavemessage extends Component {
  render() {
    return (
      <div className="bottomdiv">
        <div className="bottomtopdiv">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515400771728&di=66aea06e88a7e302a49028525d14c4fe&imgtype=0&src=http%3A%2F%2Fwenwen.soso.com%2Fp%2F20100324%2F20100324180347-1942827600.jpg"
            alt=""
          />
          <div className="rongyu">
            <span>留言板</span>
            <span>
              相遇是一件很奇妙的事,请一定做好准备,人生旅途中你很可能会遇见这么一个人,他会扰乱你的心湖、打破你平淡的生活,让你的世界从此变得不同
            </span>
          </div>
        </div>
        <div className="trueleave">
          <div>
            主人寄语:每一缕柔风,都是一次温馨的问候：每一条留言,都是一份真情的写照！
          </div>
          <Truemessage />
        </div>
      </div>
    );
  }
}
class Comment extends Component {
    render() {
      return (
        <div className="comment">
          <span>{this.props.comment.username}:</span>
          <span>{this.props.comment.content}</span>
        </div>
      );
    }
  }
  
class Commentsubmit extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      content: ""
    };
    this.handleupname = this.handleupname.bind(this);
    this.handleupvalue = this.handleupvalue.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleupname(e) {
    this.setState({
      username: e.target.value
    });
  }
  handleupvalue(e) {
    this.setState({
      content: e.target.value
    });
  }
  handlesubmit() {
    if (this.props.onSubmit) {
      const {username,content} = this.state
      this.props.onSubmit({
          username,content
       });
    }
    this.setState({
        content:""
    })
  }
  render() {
    return (
      <div>
        <input
          placeholder="请输入用户名"
          value={this.state.name}
          onChange={this.handleupname}
        />
        <input
          placeholder="请输入内容"
          value={this.state.value}
          onChange={this.handleupvalue}
        />
        <button onClick={this.handlesubmit}>提交</button>
      </div>
    );
  }
}

class CommentList extends Component {
    static defaultProps = {
        comments: []
      }
  render() {
      
    return (
      <div>
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </div>
    );
  }
}

class Truemessage extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  handleSubmitComment(comment) {
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments
    });
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
        <Commentsubmit onSubmit={this.handleSubmitComment.bind(this)} />
      </div>
    );
  }
}

export default Detail;
