import {Link} from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import './SideBar.css'
const SideBar = ()=>{

    return(
        <section className="sidebar">
            <Link to="/classroom">
                <FiBookOpen/>
            </Link>
        </section>
    )

}
export default SideBar
