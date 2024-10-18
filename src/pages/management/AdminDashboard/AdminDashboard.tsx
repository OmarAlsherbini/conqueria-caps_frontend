// src/pages/backoffice/AdminDashboard.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const AdminDashboard: React.FC = () => {

  const { t } = useTranslation(); // t is the translation function

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">{t('adminDashboard.title')}</h1>
      <p className="text-lg mt-4">{t('adminDashboard.description')}</p>
    </div>
  );
};

export default AdminDashboard;
