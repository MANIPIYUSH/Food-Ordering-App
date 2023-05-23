import {useState} from "react"

import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">    <img className="logo" src="https://imgmedia.lbb.in/media/2019/06/5d02690f2989da48650d0d7a_1560439055716.jpg" alt="logo-img" />
    </a>
        );



        
const Header = () => {

    const [isLoggedIn,setLoggedIn] = useState(false);
    <Title/>
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
           {
            isLoggedIn?(<button onClick = {()=>setLoggedIn(false)}>Logout</button>):(<button onClick ={ ()=>setLoggedIn(true)}>LogIn</button>)
             
           }
        </div>
    );
};

export default Header;