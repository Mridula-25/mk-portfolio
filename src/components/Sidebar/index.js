import {  NavLink } from 'react-router-dom'
import './index.scss'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar=()=>(
    <div className="nav-bar">
        {/* <Link className="logo" to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Mridula"/>

        </Link> */ }
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

             <NavLink exact="true" activeclassname="active" className="projects-link"  to="/projects">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link"  to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" 
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mridula-kanchan-651919246/"
                 
                >
    
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" 
                    rel="noreferrer"
                    href="https://github.com/Mridula-25"
                 
                >
    
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" 
                    rel="noreferrer"
                    href="https://www.youtube.com/@lv-ur-life"
                 
                >
    
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" 
                    rel="noreferrer"
                    href="#"
                 
                >
    
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar