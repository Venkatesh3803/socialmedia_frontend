import blank from "../../image/blankprofile.png"
import { GrEdit } from "react-icons/gr";
import "./Infocard.css"
import { useEffect, useState } from "react";
import Model from "../model/Model"
import { Link } from "react-router-dom";
import { logOut } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios"

const Infocard = () => {
    const { username } = useParams()
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.user.username)
    useEffect(() => {
        const FetchingUser = async () => {
            const res = await axios.get(`https://socialmedia-backend-lypj.onrender.com/api/user/singleuser?username=${username}`)
            setUser(res.data)
        }
        FetchingUser()
    }, [username])

    const [modelOpen, setModelOpen] = useState(false)

    
    return (
        <div className='infoCard'>
            <h3>your Info</h3>
            <div className="infoprofile">
                {currentUser === username &&
                    <>
                        <GrEdit style={{ cursor: "pointer", fontSize: "18px", padding: "2px" }} onClick={() => setModelOpen(true)} />
                        <Model modelOpen={modelOpen} setModelOpen={setModelOpen} user = {user}/>
                    </>
                }
            </div>
            <div className="infoNames">
                <img src={user.profilePic? user.profilePic.url : blank} alt="" />
                <div>
                    <p>Username</p>
                    <b>{user.username}</b>
                </div>
            </div>
            <div className="infoNames">
                <b>First Name :-</b>
                <span>
                    {user?.firstname}
                </span>
            </div>
            <div className="infoNames">
                <b>Last Name :-</b>
                <span>
                    {user?.lastname}
                </span>
            </div>
            <div className="infoNames">
                <b>Gender :-</b>
                <span>
                    {user?.gender}
                </span>
            </div>
            <div className="infoNames">
                <b>Profession :-</b>
                <span>
                  {user?.profession}
                </span>
            </div>
            <div className="infoNames">
                <b>Relationship :-</b>
                <span>
                    {user?.relationship}
                </span>
            </div>
            <div className="infoNames">
                <b>Lives In :-</b>
                <span>
                   {user?.livesIn}
                </span>
            </div>
            {currentUser === username &&
                <>
                    <Link to="/auth">
                        <button onClick={() => dispatch(logOut())} className="logout">Logout</button>
                    </Link>
                </>}
        </div>
    )
}

export default Infocard
