import React from 'react'
import "./Story.css"
import profileimg from "../../image/profileimg.jpg"
import { IoIosAddCircleOutline } from "react-icons/io";
import { Stories } from '../../data/StoryData';
import { useState } from 'react';

const Story = () => {

    const [story, setStory] = useState("")

    return (
        <>
            <div className='story'>
                <div className="container">
                    <img src={profileimg} alt="" />
                    <IoIosAddCircleOutline className='story_icon' />
                </div>
                <div className="container">
                    {Stories.map((items) => {
                        return (
                            <>
                                <img onClick={() => setStory(true)} src={items.profileimg} alt="" />
                                <div className="story_img">
                                    <img src={items.storyimg} alt="" />
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
            {story &&
                <div className="display">
                    <img src="https://images.pexels.com/photos/1374067/pexels-photo-1374067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <span onClick={()=> setStory(false)}className='cross'>X</span>
                </div>
            }
        </>
    )
}

export default Story
