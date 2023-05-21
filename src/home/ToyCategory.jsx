import React, { useEffect, useState } from 'react';
import NewArrivals from './NewArrivals';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Category_1 from './Category_1';
import Category_2 from './Category_2';
import Category_3 from './Category_3';
import 'react-tabs/style/react-tabs.css';

const ToyCategory = () => {
    const [toy, setToy] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categoryToys')
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])

    console.log(toy);
    return (
        <div className='mt-5'>
            <h3 className=' text-[30px] font-bold text-center mb-3'>Shop by Category</h3>
            <div className='lg:px-60'>
                 <Tabs>
                    <TabList>
                        <Tab>Truck</Tab>
                        <Tab>Car</Tab>
                        <Tab>Bike</Tab>
                    </TabList>

                    <TabPanel>
                        
                        <div className='lg:grid lg:grid-cols-2 gap-6 my-12 mx-auto '>
                            {
                                toy.slice(0,2).map(categoryData_1 => <Category_1
                                    categoryData_1={categoryData_1}
                                ></Category_1>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        
                        <div className='lg:grid lg:grid-cols-2 gap-6 my-12 mx-auto '>
                            {
                                toy.slice(2,4).map(categoryData_2 => <Category_2
                                    categoryData_2={categoryData_2}
                                ></Category_2>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        
                        <div className='lg:grid lg:grid-cols-2 gap-6 my-12 mx-auto '>
                            {
                                toy.slice(4,6).map(categoryData_3 => <Category_3
                                    categoryData_3={categoryData_3}
                                ></Category_3>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <h2 className=' text-center text-[40px] font-bold mb-4'>New Arrivals</h2>
            <div className=' px-16 lg:grid lg:grid-cols-6 gap-4 my-10 mx-auto w-[100%]'>

                {
                    toy.map(toys => <NewArrivals
                        toys={toys}
                    ></NewArrivals>)
                }
            </div>
        </div>
    );
};

export default ToyCategory;