import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import LanguageDropdown from './LanguageDropdown';
import { useSelector } from 'react-redux';
import '../../styles/navbars/top-navbar.css';
import useClickOutside from '../../hooks/useClickOutside';

  const TopNavBar = ({configData}) => {
    const languages = useSelector(state => state.languages);
    const selectedLanguage = languages.selectedLanguage;
    const selectedLanguageData = languages.languages[selectedLanguage];
    const [showMobileNav, setShowMobileNav] = useState(false);
    console.log("🚀 ~ file: TopNavBar.jsx:13 ~ TopNavBar ~ showMobileNav:", showMobileNav)
    const mobileNavRef = useRef();
    useClickOutside (mobileNavRef, () => setShowMobileNav(false));

    console.log("🚀 ~ file: TopNavBar.jsx:10 ~ TopNavBar ~ selectedLanguageData:", selectedLanguageData)
 
   const linkCollection = [
    {
      label: selectedLanguageData?.navigation?.home,
      link: configData?.links?.home,
      alt: "Home",
      id: "1",
    },
    {
      label: selectedLanguageData?.navigation?.order,
      link: configData?.links?.orders,
      alt: "Order",
      id: "2",
    },
    {
      label: selectedLanguageData?.navigation?.our_customer,
      link: configData?.links?.our_customer,
      alt: "Become a Customer",
      id: "3",
    },
    {
      label: selectedLanguageData?.navigation?.about_us,
      link: configData?.links?.about_us,
      alt: "About us",
      id: "4",
    },
    {
      label: selectedLanguageData?.navigation?.contact_us,
      alt: "Contactus",
      link: configData?.links?.contact_us,
      id: "5",
    },
  ];
        return(
            <header className='flex justify-between w-[90%] lg:w-[70%] xl:w-[70%] m-auto pt-8 lg:pt-10 text-white header'>
                <div className="hidden top-navbar-logo xl:block">
                  <Link href={"/"}>
                    <img src={configData?.logo} alt="" className="h-8 -mt-2" />
                  </Link>
                </div>
                <div className='relative block xl:hidden'>
                    <img src={'./assets/images/hamburger-menu.svg'} className='cursor-pointer' width="24px" height={'24px'} onClick={() => setShowMobileNav(prev => !prev)} />
                    {showMobileNav 
                    ? (<ul ref={mobileNavRef} className='absolute block p-4 bg-white shadow-xl top-8 mobile-nav w-52'>
                      {
                        linkCollection.map(link => <li className='px-3 mobile-navbar-item xl:ml-4'  key={link.id}>
                          <a href={`${link.link}`}>{link.label}</a>
                        </li>) 
                      }
                  </ul>) : null}
                </div>
                <nav className='flex'>
                  <ul className='hidden xl:flex'>
                    {
                      linkCollection.map(link => <li className='px-3 top-navbar-item xl:ml-4'  key={link.id}>
                        <a href={`${link.link}`}>{link.label}</a>
                      </li>)
                    }
                  </ul>
                  <LanguageDropdown configData={configData} className={'ml-4'} />
                </nav>
            </header>
        )
  };

  export default TopNavBar;