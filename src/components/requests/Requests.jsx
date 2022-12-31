import "./Requests.css"
import { Request } from "../../data/ResquestData"

const Requests = () => {
    
    return (
        <div className="requests">
            <h3>Requests</h3>
            {Request.map((items) => {
                return (
                    <div className="resquestBox">
                        <div className="resquestInfo">
                            <img src={items.img} alt="" />
                            <p>{items.name} <span>:- Wants to add you to Friends</span></p>
                        </div>
                        <div className="requestbutton">
                            <button className="requestaccept">Accept</button>
                            <button className="requestdelete">Delete</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Requests
