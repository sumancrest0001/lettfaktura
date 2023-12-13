import React, {useEffect, useMemo} from 'react';
import { useSelector } from 'react-redux';
import '../styles/pages/us-page.css';

const TermsPage = () => {
  const languages = useSelector(state => state.languages);
  const selectedLanguage = languages.selectedLanguage;
  const translatedData = languages.languages[selectedLanguage];

  const getValidTerms = (terms) => {
    if(!terms) return([]);
    const termsKeys = Object.keys(terms).map(key => {
        if(key === 'close' || key === 'terms') {
            return null;
        } else {
           return terms[key];
        }
    });
    const validTerms = termsKeys.filter(item => item);
    return(validTerms);
  };

  const memorizedTerms = useMemo(() => getValidTerms(translatedData?.terms), [translatedData?.terms]);

  const closePopup = () => {
  open(' ', '_self').close();
  };
  
  return (
    <section className='back-us-page'>
      <div
        className="mt-20 text-center text-black"
      >
        <h1 className="text-white font-[700] text-2xl">
            {translatedData?.terms?.terms}
          </h1>
        <div className="mt-5">
          <button
            className="back-button"
            onClick={closePopup}
          >
            {translatedData?.terms?.close}
          </button>
        </div>
      </div>
      <div
        className="back-us px-5 py-3 md:px-10 md:py-6 lg:px-16 lg:py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31] card back-us-card"
      >
        {
            memorizedTerms.length ? memorizedTerms.map((item, index) =>(<p key={index} >{item}</p>)) : null
        }
      </div>
      <div className='mb-5 text-center'>
        <button
            className="back-button"
            onClick={closePopup}
        >
            {translatedData?.terms?.close}
        </button>
      </div>
    </section>
  );
};

export default TermsPage;
