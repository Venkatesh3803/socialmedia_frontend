import "./Rightside.css"
import Resquests from "../requests/Requests"
import Sidebar from "../sidebar/Sidebar"

const Rigthside = () => {
    return (
        <div className="rightside">
            <Sidebar/>
            <hr />
            <Resquests/>
        </div>
    )
}

export default Rigthside
