import React from 'react';
import UsPage from './us-page';
import TermsPage from './terms-page';
import TopNavBar from '../components/navbars/TopNavBar';
import { Routes, Route } from 'react-router-dom';

const PublicPages = ({configData}) => {
    return(
        <div style={{backgroundImage: `url(${configData?.image})`}} className='main-container'>
        <div className='page-container'>
            <TopNavBar configData={configData}/>
                <Routes>
                    <Route path="us" element={<UsPage />} />
                    <Route path='terms' element={<TermsPage />} />
                </Routes>
        </div>
        </div>
    )
};

export default PublicPages;
