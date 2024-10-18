// src/pages/login/Login.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic for login submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const { t } = useTranslation(); // t is the translation function

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">{t('login.title')}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 px-4 py-2 border rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        {t('login.button')}
        </button>
      </form>
    </div>
  );
};

export default Login;
