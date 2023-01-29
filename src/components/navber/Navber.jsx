import "./Navber.css"
import { AiFillSkype, AiOutlineSearch, AiFillMessage, AiFillBell, AiFillHome } from "react-icons/ai";
import profileimg from "../../image/profileimg.jpg"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navber = () => {
    const user = useSelector((state) => state.user.user)
    
    return (
        <div className="navber">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="logo" >
                    <AiFillSkype className="logoIcon" />
                    <span>Soacial Media.</span>
                </div>
            </Link>
            <div className="search">
                <input type="text" placeholder="searh here..." />
                <AiOutlineSearch className="searchIcon" />
            </div>
            <div className="registration">
                <div className="icons">
                    <Link to={"/"}>
                        <AiFillHome className="registrationIcon active" />
                    </Link>
                    <Link to={`../chat/${user._id}`}>
                        <AiFillMessage className="registrationIcon" />
                    </Link>
                    <div className="bridge" style={{ left: "80px" }}><span>10</span> </div>
                 
                    <AiFillBell className="registrationIcon" />
                    <div className="bridge" style={{ left: "127px" }}><span>15</span></div>
                </div>

                <Link to={`/profile/${user.username}`}>
                    <div className="user">
                        <img src={profileimg} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navber
