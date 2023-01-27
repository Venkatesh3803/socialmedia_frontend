import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navber from "../../components/navber/Navber"
import "./information.css"
import { toast } from "react-toastify"

const Information = () => {
    const user = useSelector((state) => state.user.user)

    const [profilePic, setProfilePic] = useState("")
    const [livesIn, setLivesIn] = useState("")
    const [profession, setProfession] = useState("")
    const [worksAt, setWorksAt] = useState("")
    const [gender, setGender] = useState("")
    const [relationship, setRelationship] = useState("")


    const handleChange = (e) => {
        if (e.target.name === "profession") {
            setProfession(e.target.value)
        } else if (e.target.name === "livesin") {
            setLivesIn(e.target.value)
        } else if (e.target.name === "worksat") {
            setWorksAt(e.target.value)
        } else if (e.target.name === "gender") {
            setGender(e.target.value)
        } else if (e.target.name === "relationship") {
            setRelationship(e.target.value)
        }
    };
    const handleProfile = (e) => {
        const file = e.target.files[0]
        setFileToBase(file);
        console.log(file)
    }



    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file, file);
        reader.onloadend = () => {
            setProfilePic(reader.result);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.put(`http://localhost:5000/api/user/${user._id}`, {
            currentUserId: user._id, profession, livesIn, worksAt, gender, relationship,
            profilePic,
        })
        await res.data
        if (res.data.message === "Updated Sucessfully") {
            toast.success("Updated Sucessfully")
        }
    }

    return (
        <>
            <Navber />
            <div className='Auth'>
                <div className="authLeft">
                    <div className="logoName">
                        <h2>Social Media.</h2>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className="authRight">
                    <form onSubmit={handleSubmit} className="form">
                        <h3>Update Info</h3>
                        <div className="fristName">
                            <input type="text" placeholder='First Name' name='gender' onChange={handleChange} value={user.firstname} />
                        </div>
                        <div className="fristName">
                            <input type="text" placeholder='Last Name' name='gender' onChange={handleChange} value={user.lastname} />
                        </div>
                        <div className="fristName">
                            <input type="text" placeholder='gender' name='gender' onChange={handleChange} value={gender} />
                        </div>
                        <div className="fristName">
                            <input type="text" placeholder='Lives In' name='livesin' onChange={handleChange} value={livesIn} />
                        </div>
                        <div className="fristName">
                            <input type="text" placeholder='Work At' name='worksat' onChange={handleChange} value={worksAt} />
                        </div>
                        <div className="userName">
                            <input type="text" placeholder='profession' name='profession' onChange={handleChange} value={profession} />
                        </div>
                        <div className="userName">
                            <input type="text" placeholder='RelationShip status' name='relationship' onChange={handleChange} value={relationship} />
                        </div>
                        <div className="file">
                            <label>ProfilePic:- </label>
                            <input type="file" placeholder='Password' name='profilepic' onChange={handleProfile} />
                        </div>

                        <div className='infobtn'>
                            <button className='infobtns' type="Submit"> Update Info</button>
                            <Link to={"/"}>
                                <button className='infobtns' onChange={handleChange}> Skip</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Information
