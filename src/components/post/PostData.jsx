import React, { useEffect, useState } from 'react'
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom"
import blank from "../../image/blankprofile.png"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify"

const PostData = ({ item }) => {
    const currentUser = useSelector((state) => state.user.user)
    const [comment, setComment] = useState(false)
    const [user, setUser] = useState({})
    const [isLiked, setIsLiked] = useState(false)
    const [like, setLike] = useState(item.likes.length)

    useEffect(() => {
        setIsLiked(item.likes.includes(currentUser._id));
    }, [currentUser._id, item.likes]);


    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:5000/api/user/singleuser?userid=${item.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [item.userId]);


    const handleLike = async () => {
        try {
            const res = await axios.put("http://localhost:5000/api/post/" + item._id + "/like", { userId: currentUser._id });
            toast.success(res.data, {
                position: "bottom-center"
            })
        } catch (err) { }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);

    };


    return (
        <>
            <div className="itemItems" >
                <Link to={`../profile/${user.username}`} style={{ textDecoration: "none", color:"black" }}>
                    <div className="postProfile">
                        <img src={user.profilePic ? user.profilePic.url : blank} alt="" />
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
                    <div onClick={handleLike} className="posticons">
                        {like ?
                            <AiFillLike style={{ color: "blue" }} /> :
                            <AiOutlineLike />
                        }
                        <span>Likes</span>
                        <span>{like}</span>
                    </div>
                    <div onClick={() => setComment(!comment)} className="posticons">
                        <FaRegComment />
                        <span> Comments</span>
                    </div>
                    <div className="posticons">
                        <RiShareForwardLine />
                        <span>Share</span>
                    </div>
                </div>

                <input className='comment' type="text" placeholder='Leave Your Comment' />
                {comment &&
                    <div className='comments'>
                        <div className="postProfile">
                            <img src={user.profilePic ? user.profilePic.url : blank} alt="" />
                            <div className="postprofileInfo">
                                <p>username:</p>
                                <p>{user.username}</p>
                            </div>
                            <div className="commenttext">
                                Lorem ipsum, dolor sit amet consectetur  
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default PostData
