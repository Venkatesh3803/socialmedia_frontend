import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navber from "../../components/navber/Navber"
import "./information.css"
const Information = () => {
    const user = useSelector((state) => state.user.user)
    const { password, ...others } = user
    const [formData, setFormData] = useState(others)
    const [profilePic, setProfilePic] = useState("")
    const [coverPic, setCoverPic] = useState("")

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProfile = (e) => {
        const file = e.target.files[0]
        setFileToBase(file);
        console.log(file)
    }
    const handleCover = (e) => {
        const file = e.target.files[0]
        setFileToBase(file);
        console.log(file)
    }


    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setProfilePic(reader.result);
            setCoverPic(reader.result)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.put(`http://localhost:5000/api/user/${user._id}`, {
            currentUserId: user._id,
            formData,
            profilePic,
            coverPic
        })
        return res.data

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
                            <input type="text" placeholder='gender' name='gender' onChange={handleChange} value={formData.gender}/>
                        </div>
                        <div className="fristName">
                            <input type="text" placeholder='Lives In' name='livesIn' onChange={handleChange} value={formData.livesIn} />
                        </div>
                        <div className="fristName">
                            <input type="text" placeholder='Work At' name='worksAt' onChange={handleChange} value={formData.worksAt}/>
                        </div>
                        <div className="userName">
                            <input type="text" placeholder='profession' name='profession' onChange={handleChange} value={formData.profession}/>
                        </div>
                        <div className="userName">
                            <input type="text" placeholder='RelationShip status' name='relationship' onChange={handleChange} value={formData.relationShip}/>
                        </div>
                        <div className="file">
                            <label>ProfilePic:- </label>
                            <input type="file" placeholder='Password' name='profilepic' onChange={handleProfile} value={formData.profilePic}/>
                        </div>
                        <div className="file">
                            <label>CoverPic:-</label>
                            <input type="file" placeholder='Password' name='coverpic' onChange={handleCover} value={formData.coverPic}/>
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
