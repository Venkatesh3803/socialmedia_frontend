import "./Postshare.css"
import { AiOutlineVideoCamera } from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";
import profileimg from '../../image/profileimg.jpg'
import { useRef, useState } from "react";
import axios from "axios"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"



const Postshare = () => {
    const user = useSelector((state) => state.user.user)
    const [image, setImage] = useState(null);
    const [desc, setDesc] = useState("")
    const imageref = useRef();


    const onChangeImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            setFileToBase(file);
            console.log(file)
        }
    }
    const handleChange = (e) => {
        if (e.target.name === "desc") {
            setDesc(e.target.value)
        }
    }
    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    const reset = () => {
        setImage(null);
        setDesc("")
    }


    const handleSubmit = async () => {
        const res = await axios.post("http://localhost:5000/api/post", {
            userId: user._id,
            desc: desc,
            image
        })
        await res.data
        toast.success(res.data.message)
        reset()
    }
   

    return (
        <>
            <div className="postshare">
                <div className="postshareTop">
                    <img src={profileimg} alt="" />
                    <input type="text" name="desc" placeholder="post here..."
                        onChange={handleChange}
                        value={desc}
                    />
                    <button onClick={handleSubmit}>post</button>
                </div>
                <div className="postshareBottom">
                    <div className="postshareIcons"
                        onClick={() => imageref.current.click()}>
                        <HiOutlinePhotograph className="postshareicon" />
                        <span>Photo</span>
                        <input type="file" ref={imageref} onChange={onChangeImage} />
                    </div>
                    <div className="postshareIcons"
                        onClick={() => imageref.current.click()}>
                        <AiOutlineVideoCamera className="postshareicon" />
                        <span>Video</span>
                        <input type="file" />
                    </div>
                    <div className="postshareIcons">
                        <ImLocation className="postshareicon" />
                        <span>Location</span>
                    </div>
                    <div className="postshareIcons">
                        <ImLocation className="postshareicon" />
                        <span>Location</span>
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <MdOutlineCancel className="crossIcon" onClick={() => setImage(null)} />
                        <img src={image} required alt="" />
                    </div>
                )}
            </div>
        </>
    )

}
export default Postshare
