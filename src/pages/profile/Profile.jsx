import React from 'react'
import "./Profile.css"
import Profileleft from "../../components/profileLeft/Profileleft"
import Profilemiddle from "../../components/profileMiddle/Profilemiddle"
import Profileright from "../../components/profileRight/Profileright"
import Navber from '../../components/navber/Navber'

const Profile = () => {
    return (
        <>
            <Navber />
            <div className="blur" style={{ top: "25px", right: "50px" }}></div>
            <div className="blur" style={{ bottom: "125px", left: "50px" }}></div>
            <div className='profile'>
                <Profileleft />
                <Profilemiddle />
                <Profileright />
            </div>
        </>
    )
}

export default Profile
