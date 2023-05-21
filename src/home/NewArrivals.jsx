import React, { useState } from 'react';
import ArrivalsCard from './ArrivalsCard';

const NewArrivals = ({ dt }) => {
    // const [toy, setToy] = useState([])
 console.log(dt);
    return (
        <div className='mx-auto grid grid-cols-2 gap-4'>
            {
                dt?.toys.map(d => <ArrivalsCard
                data={d}
                ></ArrivalsCard>)
            }
        </div>
    );
};

export default NewArrivals;