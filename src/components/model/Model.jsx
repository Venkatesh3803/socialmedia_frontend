import { Modal, useMantineTheme } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import "./Model.css"
import {toast} from "react-toastify"

function Model({ modelOpen, setModelOpen, user }) {
    const theme = useMantineTheme();
    const [profilePic, setProfilePic] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [livesIn, setLivesIn] = useState("")
    const [profession, setProfession] = useState("")
    const [worksAt, setWorksAt] = useState("")
    const [gender, setGender] = useState("")
    const [relationship, setRelationship] = useState("")
    const [password, setPassword] = useState("")


    const handleChange = (e) => {
        if (e.target.name === "firstname") {
            setFirstname(e.target.value)
        } else if (e.target.name === "lastname") {
            setLastname(e.target.value)
        } else if (e.target.name === "profession") {
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
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setProfilePic(reader.result);
          
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.put(`https://socialmedia-backend-lypj.onrender.com/api/user/${user._id}`, {
            currentUserId: user._id, firstname, lastname, profession, livesIn, worksAt, gender, relationship,
            profilePic,
        
        })
        await res.data
        if (res.data.message === "Updated Sucessfully") {
            toast.success("Updated Sucessfully")
        }
    }

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size="45%"
            opened={modelOpen}
            onClose={() => setModelOpen(false)}
        >
            <div className='model'>
                <div className="modelBox">
                    <div className="modelName">
                        <h2>your Info</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="modelForm">
                        <div className="fristName">
                            <input type="text" placeholder='First name' name="firstname" onChange={handleChange} value={firstname} />
                            <input type="text" placeholder='Last name' name="lastname" onChange={handleChange} value={lastname} />
                        </div>

                        <span>Info</span>
                        <div className="fristName">
                            <input type="text" placeholder='WorksAt' onChange={handleChange} name="worksat" value={worksAt} />
                            <input type="text" placeholder='Profession' onChange={handleChange} name="profession" value={profession} />
                            <input type="text" placeholder='gender' onChange={handleChange} name="gender" value={gender} />
                        </div>
                        <div className="fristName">
                            <input type="text" placeholder='city' name="livesin" onChange={handleChange} value={livesIn} />
                            <input type="text" placeholder='Relationship status' name="relationship" onChange={handleChange} value={relationship} />
                        </div>
                        <div className="fristName">
                            <input type="password" placeholder='Password' name="password" value={password} />
                        </div>
                        <div className="image">
                            Profile pic
                            <input type="file" name="profilepic" onChange={handleProfile} />
                        
                        </div>
                        <button className='submit' type='submit'>Update</button>
                    </form>
                </div>

            </div>
        </Modal>
    );
}

export default Model