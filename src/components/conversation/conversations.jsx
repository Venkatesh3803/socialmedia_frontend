import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import "./conversations.css"

const Conversations = ({ conversation, currentUser }) => {
    const [friend, setFriend] = useState(null)
    useEffect(() => {
        let friend = conversation.members.find(f => f !== currentUser)

        const fetchingUser = async () => {
            const res = await axios.get(`https://socialmedia-backend-lypj.onrender.com/api/user/singleuser?userid=${friend}`)
            setFriend(res.data)
        }
        fetchingUser()
    }, [conversation.members,currentUser])

    return (

        <div className="conversations">
            <div className="conversationprofile">
                <img src={friend?.profilePic.url} alt="" />
                <div className="chatinfo">
                    <span>username:-</span>
                    <span>{friend?.username}</span>
                </div>
            </div>
        </div>

    )
}

export default Conversations
