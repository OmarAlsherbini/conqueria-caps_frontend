import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languages = [
    { code: 'en', label: 'English', country: 'US' },  // USA for English
    { code: 'it', label: 'Italiano', country: 'IT' }, // Italy
    { code: 'de', label: 'Deutsch', country: 'DE' },  // Germany
    { code: 'es', label: 'Español', country: 'ES' },  // Spain
    { code: 'fr', label: 'Français', country: 'FR' }, // France
    { code: 'ar', label: 'العربية', country: 'EG' }   // Egypt for Arabic
  ];

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    i18n.changeLanguage(languageCode);
    localStorage.setItem('language', languageCode); // Persist language choice
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-md border border-gray-300 shadow-sm hover:bg-gray-200 focus:outline-none"
        >
          {languages.find(lang => lang.code === selectedLanguage)?.label || 'Select Language'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.878a1 1 0 01-1.414 0l-4-4.879a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>

      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          {languages.map((language) => (
            <li key={language.code} role="menuitem">
              <button
                onClick={() => handleLanguageChange(language.code)}
                className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full ${
                  selectedLanguage === language.code ? 'bg-gray-200' : ''
                }`}
              >
                {/* Render the flag */}
                <ReactCountryFlag
                  countryCode={language.country}
                  svg
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '10px'
                  }}
                />
                {/* Language name */}
                {language.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;