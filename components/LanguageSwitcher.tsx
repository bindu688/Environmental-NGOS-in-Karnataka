
import React from 'react';
import type { Language } from '../App';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onLanguageChange }) => {
  const buttonClasses = (lang: Language) =>
    `px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
      currentLanguage === lang
        ? 'bg-white text-emerald-600'
        : 'bg-transparent text-emerald-100 hover:bg-emerald-700'
    }`;

  return (
    <div className="flex items-center space-x-1 border border-emerald-500 rounded-lg p-0.5">
      <button onClick={() => onLanguageChange('kn')} className={buttonClasses('kn')}>
        ಕನ್ನಡ
      </button>
      <button onClick={() => onLanguageChange('en')} className={buttonClasses('en')}>
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
