import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import'./index.scss';
import React, { useEffect, useState } from 'react';



const Projects = () => {
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
        <div className="container projects-page">
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15} />
            </h1>
            <p>
                I love turning ideas into functional, visually engaging websites. Below are some of my favorite front-end projects—crafted with code, creativity, and attention to detail.


            </p>
            <p>
                1. Portfolio Website
                   Tech Stack: HTML, CSS, JavaScript, react js.

                    A personal website to showcase my skills, projects, and resume. Designed to be fully responsive, with smooth scrolling, contact form, and performance-optimized assets.
            </p>
            <p>
                E-commerce Website
                 Tech Stack: HTML, CSS, JavaScript

                  A fully responsive e-commerce website that allows users to browse products, add items to the cart, manage orders, and simulate the checkout process. Designed with a clean UI and built for performance, this project showcases my ability to handle dynamic data, manage component states, and build scalable user interfaces.
                   🔑 

            </p>
            <p>
              <br />
                Below are a few of my featured front-end projects. I’m always excited to take on new challenges—let’s collaborate and build something great together! 🤝
            </p>
            </div>
            <div className="shop-section">
                <div className="box">
                    <div className="box-content">
                        <h2>Amazon</h2>  
                        <div >
                            <a href="file:///C:/SETTLE/replica_amazon/index.html">replica of Amazon</a>
                        </div>
                        <p>In Progress</p> 
                    </div> 
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>YouTube</h2>  
                        <div >
                            <a href="#">Youtube clone</a>
                        </div>
                        <p>In Progess</p> 
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Portfolio</h2>  
                        <div >
                            <a href="#">Portfolio advance animation</a>
                        </div>
                        <p>In Progress</p> 
                    </div>
                    </div>
                {/* </div>
                    <div className="box">
                    <div className="box-content">
                        <h2>Shop Toys Under $ 25</h2>  
                        <div className="box-image" style={{ backgroundImage: "url('img5toys.jpg')" }}></div>
                        <p>See More</p> 
                    </div>
                    </div> */}
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
            </div>
        </>
    );

}


export default Projects;
