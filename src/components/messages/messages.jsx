import './messages.css'
import  {format}  from "timeago.js"

const Messages = ({ message, own }) => {

    return (
        <>
            <div className="message">
                <div className={own ? "own" : "messages"}>
                    <span>{message.text}</span>
                    <p className='time'>{format(message.createdAt)}</p>
                </div>
            </div>
        </>
    )
}

export default Messages
