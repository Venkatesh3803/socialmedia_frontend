import React, { useEffect } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom"
import blank from "../../image/blankprofile.png"
import axios from 'axios';
import { useState } from 'react';
const PostData = ({ item }) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:5000/api/user/singleuser?userid=${item.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [item.userId]);
    return (
        <>
            <div className="itemItems" >
                <Link to={`../profile/${user.username}`} style={{ textDecoration: "none" }}>
                    <div className="postProfile">
                        <img src={user.image ? item.image.url : blank} alt="" />
                        <div className="postprofileInfo">
                            <p>username :</p>
                            <p>{user.username}</p>
                        </div>
                    </div>
                </Link>
                <div className="postprofileImage">
                    <img src={item.image.url} alt="" />
                </div>
                <div className="postdesc">
                    <span><b>Desc :- </b> </span>
                    <span>{item.desc}</span>
                </div>
                <div className="postprofiledesc">
                    <div className="posticons">
                        <AiOutlineLike />
                        <span>{item.likes} Likes</span>
                    </div>
                    <div className="posticons">
                        <FaRegComment />
                        <span>{item.likes} Comments</span>
                    </div>
                    <div className="posticons">
                        <RiShareForwardLine />
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostData
