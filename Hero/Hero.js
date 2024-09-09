import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'; 
import arrow_icon from '../Assets/arrow.png'; // Corrected the typo

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left"> {/* Fixed classname to className */}
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-hand-icon"> {/* Fixed classname and removed space */}
                    <p>new</p>
                    <img src={hand_icon} alt="Hand Icon" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>
            <div className="hero-right"></div>
        </div>
    );
}

export default Hero;
