// src/pages/landing/Home.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {

  const { t } = useTranslation(); // t is the translation function

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{t('home.title')}</h1>
      <p className="text-lg mt-4">{t('home.description')}</p>
    </div>
  );
};

export default Home;
