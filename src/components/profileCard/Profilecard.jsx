import "./Profilecard.css"
import { Link } from "react-router-dom";
import blank from "../../image/blankprofile.png"
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux"
import {toast} from "react-toastify"


const Profilecard = ({ Location, userId }) => {
    const currentUser = useSelector((state) => state.user.user)
    const [user, setUser] = useState("")
    const { username } = useParams()

    useEffect(() => {
        const FetchingUser = async () => {
            const res = userId ? await axios.get(`http://localhost:5000/api/user/singleuser?userid=${userId}`) : await axios.get(`http://localhost:5000/api/user/singleuser?username=${username}`)
            setUser(res.data)
        }
        FetchingUser()
    }, [username, userId])

    const handleFollow = async() => {
        const res =await axios.put(`http://localhost:5000/api/user/${currentUser._id}/follow`, {
            currentUserId: user._id
        })
        toast.success(res.data,{
            position: "bottom-center"
        })
    }

    const handleUnFollow = async() => {
        const res =await axios.put(`http://localhost:5000/api/user/${currentUser._id}/Unfollow`, {
            currentUserId: user._id
        })
        toast.success(res.data,{
            position:"bottom-center"
        })
    }

    return (
        <div className="profileCard">
            <div className="profileTop">
                <img className="coverImage" src="https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                {Location === "profilePage" ? <img className="profileImage" style={{ left: "43%" }} src={user.profilePic ? user.profilePic.url : blank} alt="" /> : <img className="profileImage" src={user.profilePic ? user.profilePic.url : blank} alt="" />}
            </div>
            <div className="profileBottom">
                <div className="profileName">
                    <span><b>{user.username}</b></span>
                    <span>Web Developer</span>
                </div>
                <hr />
                <div className="profileInfo">
                    <div className="followers">
                        <p>
                            <b>Followers</b>
                        </p>
                        <span>123</span>
                    </div>
                    <div className="vl"></div>
                    <div className="followers">
                        <p>
                            <b>Following</b>
                        </p>
                        <span>10</span>
                    </div>
                    {Location === "profilePage" && (
                        <>
                            <div className="vl"></div>
                            <div className="followers">
                                <p>
                                    <b>Posts</b>
                                </p>
                                <span>{}</span>
                            </div>
                        </>
                    )}


                </div>
                <hr />
                {Location === "profilePage" ? "" :
                    <Link to={`../profile/${user.username}`} style={{ textDecoration: "none" }}>
                        <div className="button">View Profile</div>
                    </Link>
                }
                {Location === "profilePage" && currentUser.username !== user.username && (
                    <>{currentUser.followers?.includes(user._id) ?
                        <button onClick={handleUnFollow} className="followbtn">UnFollow</button>
                        :
                        <button onClick={handleFollow} className="followbtn">Follow</button>
                    }
                    </>
                )}
            </div>

        </div >
    )
}

export default Profilecard
