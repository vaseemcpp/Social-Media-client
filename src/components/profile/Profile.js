import React, { useEffect, useState } from 'react'
import './Profile.scss'
import Post from '../post/Post.js'
import { useNavigate, useParams } from 'react-router-dom'
import CreatePost from '../createPost/CreatePost'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../redux/slices/postsSlice'
import userImg from '../../assets/user.png'

function Profile() {
const navigate = useNavigate();
const params = useParams();
const userProfile = useSelector(state => state.postsReducer.userProfile);
const myProfile = useSelector(state => state.appConfigReducer.myProfile);  
const dispatch = useDispatch();
const [isMyProfile,setIsMyProfile] = useState();
// console.log("User Profile",userProfile);
useEffect(() => {
  dispatch(getUserProfile({
    userId:params.userId 
  }))

  setIsMyProfile(myProfile?._id === params.userId);

}, [myProfile])

  return (
    <div className="Profile">
        <div className="container">
            <div className="left-part">
              <CreatePost />
            {userProfile?.posts?.map(post => <Post key={post._id} post = {post} />)}
            
            </div>
             <div className="right-part">
             <div className="profile-card">
                <img className= 'user-img'  src={userProfile?.avatar?.url?userProfile?.avatar?.url:userImg} alt="img" /> 
                <h3 className='user-name'>{userProfile.name?userProfile.name:"vas"}</h3>
                <div className="follower-info">
                    <h4>{`${userProfile?.followers?.length?userProfile.followers.length:7} Followers`}</h4>
                    <h4>{`${userProfile?.followings?.length?userProfile.followings.length:8} Followings`}</h4>
                </div>
                {!isMyProfile && <button className='follow btn-primary'>Follow</button> }
                {isMyProfile && <button className='update-profile btn-secondary' onClick={() => {navigate('/UpdateProfile')} }>Update Profile</button> }
                
             </div>
            </div> 
        </div>
    </div>
  )
}

export default Profile