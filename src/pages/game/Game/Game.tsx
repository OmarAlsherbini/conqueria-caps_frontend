// src/pages/game/Game.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Game: React.FC = () => {

  const { t } = useTranslation(); // t is the translation function
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">{t('game.title')}</h1>
      <p className="text-lg mt-4">{t('game.description')}</p>
    </div>
  );
};

export default Game;
