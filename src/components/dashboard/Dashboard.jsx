import React from 'react';
import DashboardNav from './DashboardNav';
import MenuList from './MenuList';
import PriceList from './Pricelist';
import './../../styles/dashboard/dashboard.css';


const Dashboard = ({configData}) => {
    return(
        <div className='flex flex-col dashboard-container' >
            <DashboardNav configData={configData} />
            <div className='flex grow dashboard-main'>
                <MenuList />
                <PriceList />
            </div>
        </div>
    )
};

export default Dashboard;
