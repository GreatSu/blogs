import React,{Component} from 'react'
import "./CommentFooter.css"

class CommentFooter extends Component{
    render(){
        return(
            <div className="footer">
                <div>
                    <div>关于ME</div>
                    <div>ME 博客由谁谁谁创建</div>
                    <div>你猜你猜你猜你猜你猜你猜你猜你猜你猜你猜</div>
                </div>
                <div>
                    <div>最新动态</div>
                    <div>最浪漫的旅行</div>
                    <div>最纯真的旅行</div> 
                </div>
                <div>
                    <div>图片分享</div>
                    <div>没有图片</div>
                    <div>没有图片</div>
                </div>
                <div>
                    <div>最新评论</div>
                    <div>你猜我是谁</div>
                    <div>我就不评论了</div>
                </div>
            </div>
        )
    }
}

export default CommentFooter