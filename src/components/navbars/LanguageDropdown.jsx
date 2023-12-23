import React from 'react';
import { useState, useEffect, useRef, useCallback } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { languageActions } from "../../redux/reducers/language.reducer";
import axios from "axios";
import '../../styles/navbars/language-dropdown.css';

export default function LanguageDropdown({configData, className}) {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const languages = useSelector(state => state.languages);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectedLanguage = languages.selectedLanguage;
  const languageOptions = configData.languages;
  useClickOutside(dropdownRef, () => setShow(false));

   useEffect(() => {
    if(configData?.languages) {
        try{
            const defaultLanguage = configData.languages.find(langauge => langauge.is_default);  
            const getLanguages = async () => {
                const res = await axios.get(`https://657f24cc9d10ccb465d60cee.mockapi.io/languages`);
                const updatedLanguages = {...languages.languages}
                const selectedLang = res.data.find(item => item.name === defaultLanguage.code);
                updatedLanguages[defaultLanguage.code] = selectedLang.value;
                dispatch(languageActions.addLanguage({languages: updatedLanguages, selectedLanguage: defaultLanguage.code}));
                setSelectedOption(defaultLanguage);
            };
            if(configData?.version) {
                getLanguages();
            }
        }catch(error) {
            console.log(error)
        }
        
    }
  },[configData]);
  

  const handleLanguageChange = async({languageOption}) => {
    try{
    const res = await axios.get(`https://657f24cc9d10ccb465d60cee.mockapi.io/languages`);
        const updatedLanguages = {...languages.languages}
        const selectedLang = res.data.find(item => item.name === languageOption.code);
        updatedLanguages[languageOption.code] = selectedLang.value;
        dispatch(languageActions.addLanguage({languages: updatedLanguages, selectedLanguage: languageOption.code}));
        setSelectedOption(languageOption);   
        setShow(false); 
    }catch(error) {
        console.log(error)
    }}
  return (
    <div className={`relative ${className} text-white language-dropdown-container z-10`}>
     {selectedOption && (
        <div
          id="dropdownContainer"
          className="inline-flex justify-between w-24 cursor-pointer"
          onClick={() => setShow(true)}
        >
          <p className=" flag-name">{selectedOption?.name}</p>
          <img
            src={selectedOption?.icon}
            className="h-4 mt-[0.5px] w-[26px] h-[18px] rounded-[4px] icon-flag-nav"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      )}

      {show && (
        <div 
          ref={dropdownRef}
            className="absolute px-1 py-1 mt-2 bg-white rounded-lg shadow-xl dropdown"
          >
            {languageOptions.length ? languageOptions?.map((languageOption) => (
              <div
                className={`flex cursor-pointer my-2 hover:bg-[#8cc0ff] py-1 px-2 duration-700 w-28 justify-between`}
                key={languageOption.id}
                onClick={() => handleLanguageChange({languageOption})}
              >
                <div className='font-medium text-black'>{languageOption.name}</div>
                <div className='w-[26px] h-[18px]'>
                  <img
                    src={languageOption.icon}
                    className="w-full mt-1 rounded-[4px]"
                    alt={selectedOption?.code}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            )): null}
          </div>
      )}
    </div>
  );
}
