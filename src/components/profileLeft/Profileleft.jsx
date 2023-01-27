import React, { useEffect } from 'react'
import "./Profileleft.css"
import Infocard from '../infocard/Infocard'
import Friends from "../friends/Friends"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'


const Profileleft = () => {
    const user = useSelector((state) => state.user.user)
    const [currentUser, setCurrentUser] = useState("")
    useEffect(() => {
        const currentUserData = async () => {
            const res = await axios.get(`https://socialmedia-backend-lypj.onrender.com/api/user/singleuser?userid=${user._id}`)
            setCurrentUser(res.data)
        }
        currentUserData()
    }, [user._id])

    return (
        <div className='profileLeft'>
            <Infocard />
            <span className='friendstitle'>Your Friends</span>
            {currentUser.followers?.map((ids) => {
                return (
                    <Friends userId={ids} />
                )
            })}
        </div>
    )
}

export default Profileleft
