import "./People.css"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import PersonData from "./personData"
import { useSelector } from "react-redux"

const People = () => {
    const [people, setPeople] = useState([])
    const user = useSelector((state) => state.user.user)
    const [currentUser, setCurrentUser] = useState("")

    useEffect(() => {
        const fetchingAllUsers = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/user/getallusers");
                setPeople(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchingAllUsers()
    }, [])
    
    useEffect(() => {
        const currentUserData = async () => {
            const res = await axios.get(`http://localhost:5000/api/user/singleuser?userid=${user._id}`)
            setCurrentUser(res.data)
        }
        currentUserData()
    }, [user._id])

    return (
        <div className="peoples">
            <h3>people you may know</h3>
            {people?.map((item) => {
                return (
                    <PersonData item={item} currentUser = {currentUser} />
                )
            })}
        </div >
    )
}

export default People
