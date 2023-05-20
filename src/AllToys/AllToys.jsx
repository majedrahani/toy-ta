import React, { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const [data, setData] = useState([]);

    const url = `http://localhost:5000/uploads`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    },[])

    console.log(data);
    return (
        <div className=' p-40'>
            
        {
            data.map(allToy => <AllToysCard
            allToy={allToy}
            ></AllToysCard>)
        }
    </div>
    );
};

export default AllToys;