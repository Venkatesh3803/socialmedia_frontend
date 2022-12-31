import "./Profilecard.css"
import { Link } from "react-router-dom";
import blank from "../../image/blankprofile.png"
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";


const Profilecard = ({ Location, userId }) => {
    const [user, setUser] = useState("")
    const { username } = useParams()
    useEffect(() => {
        const FetchingUser = async () => {
            const res = userId ? await axios.get(`http://localhost:5000/api/user/singleuser?userid=${userId}`): await axios.get(`http://localhost:5000/api/user/singleuser?username=${username}`)
            setUser(res.data)
        }
        FetchingUser()
    }, [username, userId])

    console.log(user)
    return (
        <div className="profileCard">
            <div className="profileTop">
                <img className="coverImage" src={user.coverPic?.url} alt="" />
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
                                <span>5</span>
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
                {Location === "profilePage" && (
                        <>
                            <button className="followbtn">Follow</button>
                        </>
                    )}
            </div>

        </div >
    )
}

export default Profilecard
