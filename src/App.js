import React from 'react';
import './styles/main.css';
import { useConfig } from './hooks/useConfig';
import { Route, Routes } from 'react-router-dom';
import PublicPages from './pages';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
    const configData = useConfig();
    return(<>  
        {/* <PublicPages configData={configData} /> */}
        <Routes>
            <Route path="/*" element={<PublicPages configData={configData} />} />

            <Route path='/dashboard' element={<Dashboard configData={configData} />} />
        </Routes>
        
    </>);
};
export default App;