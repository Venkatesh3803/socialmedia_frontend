import { Post } from "../post/Post"
import Postshare from "../postshare/Postshare"
import Story from "../story/Story"
import "./Middle.css"

const Middle = () => {
    return (
        <div className="middlePage">
            <Story/>
            <Postshare/>
            <Post/>
        </div>
    )
}

export default Middle