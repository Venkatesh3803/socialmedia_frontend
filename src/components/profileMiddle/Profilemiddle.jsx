import React from 'react'
import "./Profilemiddle.css"
import Profilecard from "../../components/profileCard/Profilecard"
import { Post } from "../../components/post/Post"
import Postshare from "../../components/postshare/Postshare"
const Profilemiddle = () => {
  return (
    <>
      <div className='profileMiddle'>
        <div className="middle">
          <Profilecard Location = "profilePage"/>
          <Postshare />
          <Post />
        </div>
      </div>
    </>
  )
}

export default Profilemiddle
