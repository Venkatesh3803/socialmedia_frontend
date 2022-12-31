import "./Post.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios"
import PostData from "./PostData";
export const Post = () => {
    const [post, setPost] = useState([])
    const user = useSelector((state) => state.user.user)

    useEffect(() => {
        const fetchingUserPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/post/${user._id}/timeline`)
            setPost(res.data)
        }
        fetchingUserPost()
    }, [user._id])


    return (
        <div className="post">
            {post?.map((items) => {
                return (
                    <div className="element" key={items._id}>
                        <PostData item={items} />
                    </div>
                )
            })}

        </div>
    )
}
