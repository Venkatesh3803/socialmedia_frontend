import React from 'react'
import "./Profilemiddle.css"
import Profilecard from "../../components/profileCard/Profilecard"
import { Post } from "../../components/post/Post"
import Postshare from "../../components/postshare/Postshare"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



const Profilemiddle = () => {
  const currentUser = useSelector((state) => state.user.user)
  const { username } = useParams()

  return (
    <>
      <div className='profileMiddle'>
        <div className="middle">
          <Profilecard Location="profilePage" />
          {currentUser.username === username &&
            <Postshare />
          }
          <Post username={username} />
        </div>
      </div>
    </>
  )
}

export default Profilemiddle
