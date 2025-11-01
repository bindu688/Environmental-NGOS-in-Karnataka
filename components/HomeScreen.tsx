import React from 'react';
import type { NGO } from '../types';
import { translations } from '../translations';
import { iconMap, ChatIcon } from './Icons';
import LanguageSwitcher from './LanguageSwitcher';
import type { Language } from '../App';

interface HomeScreenProps {
  onNavigateToChat: () => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1532924847628-a4a3504d6560?q=80&w=1925&auto=format&fit=crop';

const NGOCard: React.FC<{ ngo: NGO; cardTitle: string }> = ({ ngo, cardTitle }) => {
    const IconComponent = iconMap[ngo.iconKey as keyof typeof iconMap];
    return (
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <IconComponent className="h-10 w-10 text-emerald-600" />
                </div>
                <div>
                <h3 className="text-xl font-bold text-gray-800">{ngo.name}</h3>
                <p className="text-sm font-semibold text-emerald-700 mt-1">{ngo.location}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-md font-semibold text-gray-700 mb-2">{cardTitle}</p>
                <ul className="space-y-2">
                {ngo.aspects.map((aspect, index) => (
                    <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">✔</span>
                    <span className="text-gray-600">{aspect}</span>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
    );
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigateToChat, language, onLanguageChange }) => {
  const t = translations[language];
  const ngos = t.ngos as NGO[];

  return (
    <div className="relative min-h-screen">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-green-900/60" aria-hidden="true"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="bg-emerald-600/80 backdrop-blur-sm text-white p-4 sm:p-6 shadow-md relative">
            <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-bold">{t.home.title}</h1>
                <p className="text-emerald-100 mt-2 text-sm sm:text-base">
                {t.home.subtitle}
                </p>
            </div>
            <div className="absolute top-4 right-4">
                <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
            </div>
        </header>

        <main className="p-4 md:p-8 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {ngos.map((ngo) => (
                <NGOCard key={ngo.name} ngo={ngo} cardTitle={t.home.ngo_card_title}/>
            ))}
            </div>
        </main>
      </div>

      <button
        onClick={onNavigateToChat}
        className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-transform duration-300 hover:scale-110 z-20"
        aria-label={t.home.chat_button_aria}
      >
        <ChatIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default HomeScreen;