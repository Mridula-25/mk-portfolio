import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React, { useEffect, useState } from 'react';
// import Logo from './Logo'; // Assuming Logo is a component that renders your logo





const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'M', 'r', 'i', 'd', 'u', 'l', 'a', ' ', 'K', 'a', 'n', 'c', 'h', 'a', 'n'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, []) wrong way to use useEffect, it should be used like this:


    useEffect(() => {
    const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
}, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
            <h1> 
            <span className={letterClass}>H</span> 
            <span className={'&{letterClass} _12'}>i,</span> 
            <br/> 
             <span className={'&{letterClass} _13'}>I'</span> 
              <span className={'&{letterClass} _14'}>m</span> 
            {/* <img src={LogoTitle} alt="developer"/>  */}
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
           <br/>
           <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
    
            </h1>
             
           <h2>Frontend Developer / Javascript / Open-Source Contributor / Collaboration</h2>


            <Link to="/contact" className='flat-button'>CONTACT-ME</Link>

            <a href="/mridula_kanchan_resume.pdf" className="flat-button" download>DOWNLOAD RESUME</a>
        </div>
         {/* <Logo /> */}
        </div>
    )
}

export default Home