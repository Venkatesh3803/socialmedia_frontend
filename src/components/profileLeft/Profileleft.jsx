import React from 'react'
import "./Profileleft.css"
import Infocard from '../infocard/Infocard'
import Friends from "../friends/Friends"

import { useSelector } from 'react-redux'


const Profileleft = () => {
    const user = useSelector((state) => state.user.user)
const userId = user._id
    return (
        <div className='profileLeft'>
            <Infocard />
            <Friends userId={userId} />
        </div>
    )
}

export default Profileleft
