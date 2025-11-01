
import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';

export type Language = 'kn' | 'en';

const App: React.FC = () => {
  const [screen, setScreen] = useState<'home' | 'chat'>('home');
  const [language, setLanguage] = useState<Language>('kn');

  const navigateToChat = () => setScreen('chat');
  const navigateToHome = () => setScreen('home');
  const handleLanguageChange = (lang: Language) => setLanguage(lang);

  return (
    <div className="bg-emerald-50 min-h-screen font-sans">
      {screen === 'home' ? (
        <HomeScreen
          onNavigateToChat={navigateToChat}
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      ) : (
        <ChatScreen
          onNavigateToHome={navigateToHome}
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      )}
    </div>
  );
};

export default App;
