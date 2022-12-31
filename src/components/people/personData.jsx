import React from 'react'
import blank from "../../image/blankprofile.png"
import axios from 'axios'
import "./People.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const PersonData = ({ item }) => {
    const user = useSelector((state) => state.user.user)

    const handleFollow = () => {
        const res = axios.put(`http://localhost:5000/api/user/${user._id}/follow`, {
            currentUserId: item._id
        })
        console.log(res)
    }
    return (
        <div>
            {item._id === user._id ? "" :
                <>
                    <div className="follow" key={item._id}>
                        <Link to={`../profile/${item.username}`} style={{ textDecoration: "none" }}>
                            <div className="username">
                                <img src={item.profilePic ? item.profilePic.url : blank} alt="" />
                                <div className="usernames">
                                    <span>{item.firstname} </span>
                                    <span> {item.username}</span>
                                </div>
                            </div>
                        </Link>

                        <div >
                            <button onClick={handleFollow} className="viewbtn">Follow</button>
                        </div>

                    </div>
                    <hr />
                </>
            }
        </div>
    )
}

export default PersonData
