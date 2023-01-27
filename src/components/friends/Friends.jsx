import React, { useEffect, useState } from 'react'
import "./Friends.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


const Friends = ({ userId }) => {
    const user = useSelector((state) => state.user.user)
    const [currentUser, setCurrentUser] = useState("")
    const [follow, setFollow] = useState(false)
    useEffect(() => {
        setFollow(currentUser.followers?.includes(userId))
    }, [currentUser.followers, userId])


    useEffect(() => {
        const currentUserData = async () => {
            const res = await axios.get(`http://localhost:5000/api/user/singleuser?userid=${userId}`)
            setCurrentUser(res.data)
        }
        currentUserData()
    }, [userId])

    const handlefollow = async () => {
        if (!follow) {
            const res = await axios.put(`http://localhost:5000/api/user/${user._id}/unfollow`, {
                currentUserId: userId
            })
            toast.success(res.data, {
                position: "bottom-center"
            })
        } else {
            const res = await axios.put(`http://localhost:5000/api/user/${user._id}/follow`, {
                currentUserId: userId
            })
            toast.success(res.data, {
                position: "bottom-center"
            })
        }
        setFollow(!follow)
    }

    return (
        <div className='friends'>
            <div className="follow" >
                <Link to={`../profile/${currentUser.username}`} style={{ textDecoration: "none", color: "black" }}>
                    <div className="username">
                        <img src={currentUser.profilePic?.url} alt="" />
                        <div className="usernames">
                            <span> <b> {currentUser.firstname}</b></span>
                            <span>{currentUser.username} </span>
                        </div>
                    </div>
                </Link>
                <div className="online">
                    {!follow ?
                        <button onClick={() => handlefollow()} className='viewbtn'>Unfollow</button>
                        :
                        <button onClick={() => handlefollow()} className='viewbtn'>follow</button>
                    }
                </div>

            </div>

        </div>
    )
}

export default Friends
