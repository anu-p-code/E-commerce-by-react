import React from 'react'; // Corrected import statement
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left"> {/* Fixed classname typo */}
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right"> {/* Fixed classname typo */}
                <img src={exclusive_image} alt="Exclusive Offers" /> {/* Added descriptive alt text */}
            </div>
        </div>
    );
}

export default Offers;
