import React from 'react'; // Capitalize 'React'
import './DescriptionBox.css';

const DescriptionBox = () => { // Capitalize 'DescriptionBox'
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    E-commerce, or electronic commerce, refers to the buying and selling 
                    of goods and services over the internet. It allows businesses and 
                    consumers to conduct transactions digitally, offering convenience 
                    and accessibility across various devices. E-commerce platforms range 
                    from online marketplaces like Amazon and eBay to individual business websites, 
                    where customers can browse, make purchases, and track orders. With features 
                    like secure payment gateways and user-friendly interfaces, e-commerce has 
                    revolutionized the global retail landscape by making products and services 
                    available to a wider audience.
                </p>
                <p>
                    An e-commerce website displays product listings, shopping carts, 
                    payment gateways, customer reviews, and promotional banners to 
                    facilitate online purchases.
                </p>
            </div>
        </div>
    );
}

export default DescriptionBox; // Capitalize 'DescriptionBox'
