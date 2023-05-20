import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import MyToysCard from './myToysCard';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [data , setData] = useState([]);

    const url = `http://localhost:5000/uploads?email=${user?.email}`
    
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
                data.map(myToy => <MyToysCard
                myToy={myToy}
                ></MyToysCard>)
            }
        </div>
    );
};

export default MyToys;