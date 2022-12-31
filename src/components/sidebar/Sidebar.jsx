import React from 'react'
import "./Sidebar.css"
import { BsPeopleFill, BsCalendar2Event, BsChatText } from "react-icons/bs";
import { MdRssFeed } from "react-icons/md";
import { AiOutlineSetting, AiOutlineVideoCamera } from "react-icons/ai";
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarFeeds">
                <div className="sidebarIcons">
                    <MdRssFeed style={{ fontSize: "18px", cursor:"pointer" }} />
                    <span>Feed</span>
                </div>
                <hr />
                <div className="sidebarIcons">
                    <BsPeopleFill style={{ fontSize: "18px", cursor:"pointer" }} />
                    <span>Groups</span>
                </div>
                <hr />
                <div className="sidebarIcons">
                    <BsCalendar2Event style={{ fontSize: "18px", cursor:"pointer" }} />
                    <span>Events</span>
                </div>
                <hr />
                <div className="sidebarIcons">
                    <BsChatText style={{ fontSize: "18px", cursor:"pointer" }} />
                    <span>Chat</span>
                </div>
                <hr />
                <div className="sidebarIcons">
                    <AiOutlineVideoCamera style={{fontSize: "18px", cursor:"pointer"}} />
                    <span>Saved Videos</span>
                </div>
                <hr />
                <div className="sidebarIcons">
                    <AiOutlineSetting style={{ fontSize: "18px" , cursor:"pointer"}} />
                    <span>Settings</span>
                </div>
                <hr />
            </div>
            <div className="sidebarbutton">Show More</div>
        </div>
    )
}

export default Sidebar
