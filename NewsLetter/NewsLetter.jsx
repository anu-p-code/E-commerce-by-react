import React from 'react'; // Corrected import statement
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='newsletter'> {/* Fixed typo in className */}
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p> {/* Fixed typo in 'newsletter' */}
            <div>
                <input type="email" placeholder='Your Email' /> {/* Fixed placeholder text */}
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;
