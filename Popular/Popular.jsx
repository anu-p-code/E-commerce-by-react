import React from 'react';
import './Popular.css';
import data_product from '../Assets/data'; // Ensure this is the correct path and format of data
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMAN</h1>
            <hr />
            <div className='popular-item'>
                {data_product.map((item) => { // Removed index 'i' as it's not needed for keys
                    return (
                        <Item
                            key={item.id} // Use item.id for better uniqueness
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Popular;
