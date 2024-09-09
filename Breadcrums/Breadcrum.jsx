import React from 'react';
import arrow_icon from '../Assets/arrow.png'; // Ensure this path is correct

const Breadcrumbs = ({ product }) => { // Rename component to match usage
    return (
        <div className='breadcrumbs'> {/* Updated class name for consistency */}
            HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product?.category} <img src={arrow_icon} alt="arrow" /> {product?.name}
        </div>
    );
}

export default Breadcrumbs; // Export with consistent naming
