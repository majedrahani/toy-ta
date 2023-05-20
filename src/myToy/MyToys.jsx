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

    const handleDelete = (id) =>{
        const proceed = confirm('are you sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/uploads/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted successfully')
                    const remaining = data.filter(d => d._id !== id)
                    setData(remaining)
                }
            })
        }
    }
    
    
    
   
    return (
        <div className=' p-40'>
            
            {
                data.map(myToy => <MyToysCard
                myToy={myToy}
                handleDelete={handleDelete}
                ></MyToysCard>)
            }
        </div>
    );
};

export default MyToys;