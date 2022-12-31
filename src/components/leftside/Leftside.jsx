import React from 'react'
import Profilecard from '../profileCard/Profilecard'
import People from "../../components/people/People"
import "./Leftside.css"
import { useSelector } from 'react-redux'

const Leftside = () => {
    const user = useSelector(state => state.user.user)
    const userId = user._id
    return (
        <div className="leftside">
            <Profilecard userId = {userId}/>
            <hr />
            <People/>
        </div>
    )
}

export default Leftside

