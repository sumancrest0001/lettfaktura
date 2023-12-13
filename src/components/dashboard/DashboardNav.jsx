import React from 'react';
import {Link} from "react-router-dom";
import LanguageDropdown from "../navbars/LanguageDropdown";
import './../../styles/dashboard/dashboard.css';

const DashboardNav = ({configData}) => {

  return (
    <nav className="dashboard-nav-container">
      <header className="dashboard-nav xl:w-[78%] w-[100%]">
        <section className="flex items-center place-content-between">
            <div className="flex items-center user-profile">
                <Link href={"/dashboard"}>
                    <img
                    src={'/assets/images/user-profile.png'}
                    alt={'Demo User'}
                    />
                </Link>
                <div className="ml-3 text-white">
                    <p className="text-lg">Demo user</p>
                    <div className="-mt-1">
                    <p className="text-sm">Demo addressline -1</p>
                    </div>
                </div>
            </div>
            <div className='hamburger-menu-icon'>
                <img src={'./assets/images/hamburger-menu.svg'} width="24px" height={'24px'} />
            </div>
          <div className="my-5 text-white">
            <LanguageDropdown configData={configData} />
          </div>
        </section>
      </header>
    </nav>
  );
}

export default DashboardNav;
