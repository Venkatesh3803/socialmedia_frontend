import "./People.css"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import PersonData from "./personData"

const People = () => {
    const [people, setPeople] = useState([])
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

    return (
        <div className="peoples">
            <h3>people you may know</h3>

            {people?.map((item) => {
                return (
                    <PersonData item = {item}/>
                )
            })}
        </div >
    )
}

export default People
