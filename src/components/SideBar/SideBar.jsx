import { Link } from "react-router-dom";
import profileImg from "../../assets/about-BgAkqdr2.jpg"
import styles from "./SideBar.module.css"

const SideBar = () => {
return (
    <div className={`flex flex-col items-center ${styles.sidebar}`}>

        <img src={profileImg} alt="" className={styles.circleImg}/>


        
        <p className={`text-3xl`}>Hossam Elshal</p>
        <p className={styles.title}>Frontend Developer</p>


        <div className="flex flex-col">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Experience</a>
        <a href="">Work</a>
        </div>

        <link to="/home">Home</link>

    </div>
)
}

export default SideBar