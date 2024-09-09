import React from 'react';
import Hero from '../Hero/Hero'; // Ensure the path is correct
import Popular from '../Popular/Popular'; // Ensure the path is correct
import Offers from '../Offers/Offers'; // Ensure the path is correct
import NewCollection from '../NewCollections/NewCollection'; // Ensure this is the correct file

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollection />
        </div>
    );
};

export default Shop;
