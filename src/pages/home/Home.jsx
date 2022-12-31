
import Leftside from "../../components/leftside/Leftside"
import Middle from "../../components/middle/Middle"
import Rightside from "../../components/rightside/Rigthside"
import Navber from "../../components/navber/Navber"
import "./Home.css"

const Home = () => {
    return (
        <>
            <Navber />
            <div className="blur" style={{ top: "25px", right: "50px" }}></div>
            <div className="blur" style={{ bottom: "125px", left: "50px" }}></div>
            <div className="home">
                <Leftside />
                <Middle />
                <Rightside />
            </div>
        </>
    )
}

export default Home
