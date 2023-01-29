import './chat.css'
import Navber from '../../components/navber/Navber'
import { useState, useEffect } from 'react'
import Messages from '../../components/messages/messages'
import Conversations from '../../components/conversation/conversations'
import axios from "axios"
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const Chat = () => {
    const user = useSelector((state) => state.user.user)
    const [messages, setMessages] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [conversation, setConversation] = useState(false)
    const [text, setText] = useState("")
    const scrollRef = useRef()

    useEffect(() => {
        const conversations = async () => {
            const res = await axios.get(`https://socialmedia-backend-lypj.onrender.com/api/conversation/${user._id}`)
            setConversation(res.data)
        }
        conversations()
    }, [user._id])


    useEffect(() => {
        const fetchMessages = async () => {
            const res = await axios.get(`https://socialmedia-backend-lypj.onrender.com/api/message/${currentChat}`)
            setMessages(res.data)
        }
        fetchMessages()
    }, [currentChat])

    const handleSubmit = async () => {

        const res = await axios.post("https://socialmedia-backend-lypj.onrender.com/api/message", {
            conversationId: currentChat,
            senderId: user._id,
            text: text
        })
        await res.data
        setMessages([...messages, res.data])
        setText("")
    }
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <>
            <Navber />
            <div className="blur" style={{ top: "25px", right: "50px" }}></div>
            <div className="blur" style={{ bottom: "125px", left: "50px" }}></div>
            <div className='chat'>
                <div className='chatleft'>
                    <div className="chatleftcontainer">
                        <div className="chatprofile">
                            <img src="https://images.pexels.com/photos/14431490/pexels-photo-14431490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="chatinfo">
                                <span>username:-</span>
                                <span>santosh kumar</span>
                            </div>
                        </div>
                        <input className='searchbox' type="text" placeholder='Search Chat...' />
                        {conversation && conversation.map((c) => {
                            return (
                                <div onClick={() => setCurrentChat(c._id)}>
                                    <Conversations conversation={c} currentUser={user._id} />
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className='chatright'>
                    {currentChat ?
                        <div className="chatrightcontainer">
                            <div className="chatprofile">
                                <img src="https://images.pexels.com/photos/14431490/pexels-photo-14431490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="chatinfo">
                                    <span>Click here For info</span>
                                    <span>santosh Kumar</span>
                                </div>
                            </div>

                            {messages.map((m) => {
                                return (
                                    <div ref={scrollRef}>
                                        <Messages message={m} own={m.senderId === user._id} />
                                    </div>
                                )
                            })}

                            <div className="sendbox">
                                <input className='textinput' type="text" placeholder='enter your message' onChange={(e) => setText(e.target.value)} value={text} />
                                <button onClick={handleSubmit} className='sendbutton'>Send</button>
                            </div>
                        </div>
                        : <span className='startconv'>Start Conversation</span>
                    }
                </div>
            </div>
        </>
    )
}

export default Chat
