import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category_1 from './Category_1';
import Category_2 from './Category_2';
import Category_3 from './Category_3';
import NewArrivals from './NewArrivals';

const ShopByCtgry = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/categoryToys`)
            .then(res => res.json())
            .then(data => {
                const result = data.map(d => setData(d))
            })
    }, [])

    // console.log(data?.carToys);
    return (
        <div>
            <div className='px-60'>
                <Tabs>
                    <TabList>
                        <Tab>Truck</Tab>
                        <Tab>Car</Tab>
                        <Tab>Bike</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>{data?.carToys?.[0]?.name}</h2>
                        <div className='grid grid-cols-2 gap-6 my-12 mx-auto '>
                            {
                                data?.carToys?.[0]?.toys.map(categoryData_1 => <Category_1
                                    categoryData_1={categoryData_1}
                                ></Category_1>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>{data?.carToys?.[1]?.name}</h2>
                        <div className='grid grid-cols-2 gap-6 my-12 mx-auto '>
                            {
                                data?.carToys?.[1]?.toys.map(categoryData_2 => <Category_2
                                    categoryData_2={categoryData_2}
                                ></Category_2>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>{data?.carToys?.[2]?.name}</h2>
                        <div className='grid grid-cols-2 gap-6 my-12 mx-auto '>
                            {
                                data?.carToys?.[2]?.toys.map(categoryData_3 => <Category_3
                                    categoryData_3={categoryData_3}
                                ></Category_3>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            {/* new arrivals */}
            <div className=''>
                <h2 className=' text-center text-[40px] font-bold mb-4'>New Arrivals</h2>
                <div className=' px-16 grid grid-cols-3 gap-4 my-10 mx-auto w-[100%]'>

                    {
                        data?.carToys.map(dt => <NewArrivals
                            dt={dt}
                        ></NewArrivals>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopByCtgry;