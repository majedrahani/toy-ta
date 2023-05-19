import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCtgry = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // console.log(data.tabs[1].toys[1]);
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Truck</Tab>
                    <Tab>Car</Tab>
                    <Tab>Bike</Tab>
                </TabList>

                <TabPanel>
                    <h2>{data.tabs[0].name}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{data.tabs[1].name}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{data.tabs[2].name}</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCtgry;