import { Modal, useMantineTheme } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import "./Model.css"

function Model({ modelOpen, setModelOpen, user }) {
    const { password, ...others } = user
    const theme = useMantineTheme();
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
                            <input type="text" placeholder='First name' name="firstname" onChange={handleChange} value={formData.firstname} />
                            <input type="text" placeholder='Last name' name="lastname" onChange={handleChange} value={formData.lastname} />
                        </div>

                        <span>Info</span>
                        <div className="fristName">
                            <input type="text" placeholder='WorksAt' name="worksAt" value={formData.worksAt} />
                            <input type="text" placeholder='Profession' name="Profession" value={formData.profession} />
                        </div>
                        <div className="fristName">
                            <input type="text" placeholder='city' name="livesIn" onChange={handleChange} value={formData.livesIn} />
                            <input type="text" placeholder='Relationship status' name="relationship" onChange={handleChange} value={formData.relationship} />
                        </div>
                        <div className="fristName">
                            <input type="password" placeholder='Password' name="password" value={password} />
                        </div>
                        <div className="image">
                            Profile pic
                            <input type="file" name="profilepic" onChange={handleProfile} value={formData.profilePic}/>
                            cover pic
                            <input type="file" name="coverpic" onChange={handleCover} value={formData.coverPic}/>
                        </div>
                        <button className='submit' type='submit'>Update</button>
                    </form>
                </div>

            </div>
        </Modal>
    );
}

export default Model