import React, { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss';


const Contact = () =>  {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showLoader, setShowLoader] = useState(true);
    const refForm = useRef();

    useEffect(() => {
        emailjs.init('33-tontBYCquP_dDQ'); // Initialize EmailJS with your public key
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
            setShowLoader(false);
        }, 1300); // 1.3 seconds
        return () => clearTimeout(timeout);
    }, []);


    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                // 'gmail', // Use 'gmail' as the service name
                'service_mkyiphl', // Your actual service ID
                'template_gjevat6', // Your actual template ID
                refForm.current
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again.');
                }
            );
    };

    return (
        <>
            {showLoader ? (
                <div className="loader-inner pacman">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <div className="container contact-page">
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                                idx={15}
                            />
                        </h1>
                        <p>
                            If you would like to get in touch, feel free to reach out via email or connect with me on social media.
                        </p>
                        <p>
                            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type='text' name='name' placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email' name='email' placeholder='email' required />
                                    </li>
                                    <li>
                                        <input placeholder='Subject' type='text' name='subject' required />
                                    </li>
                                    <li>
                                        <textarea placeholder='Message' name='message' required></textarea>
                                    </li>
                                    <li>
                                        <input type='submit' className='flat-button' value='SEND' />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact;
