import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import'./index.scss';
import React, { useEffect, useState } from 'react';
import { faCss3, faGitAlt, faReact, faJs, faHtml5, faAngular } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showLoader, setShowLoader] = useState(true);
    

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
            setShowLoader(false);
        }, 1300); // 1.2 seconds
        return () => clearTimeout(timeout);
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                idx={15} />
            </h1>
            <p>
                I am a passionate frontend developer with a love for creating dynamic and responsive web applications.
                My journey in web development started with a fascination for how websites work and has evolved into a career where I can express my creativity and technical skills. With experience in HTML, CSS, JavaScript (ES6+), and modern frameworks like React js, I turn ideas into interactive digital experiences.
            </p>
            <p>
                I enjoy working with modern JavaScript frameworks and libraries, and I am always eager to learn new technologies to enhance my skill set. I enjoy building clean, accessible code and translating complex problems into seamless web solutions. Whether it's collaborating with designers to bring a UI to life, optimizing performance, or ensuring cross-browser compatibility, I take pride in every detail.
            </p>
            <p>
              Currently, I'm focused on writing scalable front-end architecture, improving user experience, and building apps that not only look great but also perform efficiently across all devices. <br/> Beyond just coding, I thrive in collaborative environments, enjoy working closely with designers and back-end teams, and actively contribute to improving workflows and development processes. I’ve also mentored junior developers, conducted code reviews, and helped introduce modern front-end practices into teams.
            </p>
            </div>
            <div className='stage-cube-cont'>
  <div className='cubespinner'>
    <div className='face1'>
      <FontAwesomeIcon icon={faAngular} color="#dd0031" />
    </div>
    <div className='face2'>
      <FontAwesomeIcon icon={faHtml5} color="#f06529" />
    </div>
    <div className='face3'>
      <FontAwesomeIcon icon={faCss3} color="#28A4d9" />
    </div>
    <div className='face4'>
      <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
    </div>
    <div className='face5'>
      <FontAwesomeIcon icon={faJs} color="#efd81d" />
    </div>
    <div className='face6'>
      <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
    </div>
  </div>
                
  </div>
 </div>
 {showLoader && (
      <div className="loader-inner pacman">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )}
    </>
    );
}

export default About;