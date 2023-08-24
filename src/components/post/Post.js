import React from 'react'
import './Post.scss'
import Avatar from '../avatar/Avatar'
import backgroundImg from '../../assets/nature.jpg'
import{AiOutlineHeart} from 'react-icons/ai'

function Post({post}) {
  return (
    <div className="Post">
        <div className="heading">
            <Avatar src={post.owner?.avatar?.url}/>
            {/* <Avatar /> */}
            <h4> {post.owner?.name}</h4>
             {/* <h4>Vaseem Mansuri</h4> */}
        </div>
        <div className="content">
            {/* <img src={post.image.url} alt="" /> */}
            <img src={backgroundImg} alt="" />
        </div>
        <div className="footer">
            <div className="like">
                <AiOutlineHeart  className="icon"/>
                {/* <h4>{`${post.likesCount} likes`}</h4> */}
                <h4>4 likes</h4>
            </div>
           {/* <p className="caption">{post.caption}</p>
           <h6 className="time-ago">{post?.timeAgo}</h6> */}
            <p className="caption">This is Post</p>
           <h6 className="time-ago">4 hr ago</h6>
        </div>
    </div>
  )
}

export default Post
