import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import '../styles/pages/us-page.css';

const UsPage = () => {
  const languages = useSelector(state => state.languages);
  const selectedLanguage = languages.selectedLanguage;
  const translatedData = languages.languages[selectedLanguage];
  

  const closePopup = () => {
  open(' ', '_self').close();
  };
  
  return (
    <section className='back-us-page'>
      <div
        className="mt-20 text-center text-black"
      >
        {/* <h1 className='text-white font-[700] text-2xl'>{translatedData?.terms?.terms}</h1> */}
        <div className="mt-5">
          <button
            className="back-button"
            onClick={closePopup}
          >
            {translatedData?.us?.close}
          </button>
        </div>
      </div>
      <div
        className="back-us px-5 py-3 md:px-10 md:py-6 lg:px-16 lg:py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31] card back-us-card"
      >
         <p>{translatedData?.us?.us_text_1}</p>
        <p>{translatedData?.us?.us_text_2}</p>
        <p>{translatedData?.us?.us_text_3}</p>
      </div>
    </section>
  );
};

export default UsPage;
