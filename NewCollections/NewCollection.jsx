import React from 'react'; // Corrected import
import './NewCollection.css';
import new_collection from '../Assets/new_collections'; // Ensure the correct file extension
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='new-collection'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return (
                        <Item
                            key={i} // Corrected to lowercase 'key'
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price} // Fixed typo
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default NewCollections;
