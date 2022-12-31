import React from 'react'
import "./Friends.css"
import { FriendsData } from '../../data/Friends'

const Friends = () => {
   



    return (
        <div className='friends'>
            <h3>Friends</h3>
            {FriendsData.map((item, id) => {
                return (
                    <>
                        <div className="follow" key={id}>
                            <div className="username">
                                <img src={item.img} alt="" />
                                <div className="usernames">
                                    <span> <b> {item.username}</b></span>
                                    <span>{item.name} </span>
                                </div>
                            </div>
                            <div className="onlin">
                                {item.lastseen}
                            </div>

                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Friends
