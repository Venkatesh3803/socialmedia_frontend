import React from 'react'
import blank from "../../image/blankprofile.png"
import axios from 'axios'
import "./People.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { toast } from "react-toastify"

const PersonData = ({ item, currentUser }) => {
    const user = useSelector((state) => state.user.user)
    const [follow, setFollow] = useState(false)
    useEffect(() => {
        setFollow(currentUser.followers?.includes(item._id))
    }, [item._id, currentUser.followers])

    const handleFollow = async () => {
        if (!follow) {
            const res = await axios.put(`http://localhost:5000/api/user/${user._id}/follow`, {
                currentUserId: item._id
            })
            toast(res.data, {
                position: "bottom-center"
            })
        } else {
            const res = await axios.put(`http://localhost:5000/api/user/${user._id}/Unfollow`, {
                currentUserId: item._id
            })
            toast.success(res.data, {
                position: "bottom-center"
            })
        }
        setFollow(!follow)
    }

    return (
        <div>
            {item._id === user._id || follow ? "" :
                <>
                    <div className="follow" key={item._id}>
                        <Link to={`../profile/${item.username}`} style={{ textDecoration: "none", color:"black" }}>
                            <div className="username">
                                <img src={item.profilePic ? item.profilePic.url : blank} alt="" />
                                <div className="usernames">
                                    <span>{item.firstname} </span>
                                    <span> {item.username}</span>
                                </div>
                            </div>
                        </Link>
                        {follow ?
                            <button onClick={handleFollow} className="viewbtn">UnFollow</button>
                            :
                            <button onClick={handleFollow} className="viewbtn">Follow</button>
                        }
                    </div>
                    <hr />
                </>
            }
        </div>
    )
}

export default PersonData
