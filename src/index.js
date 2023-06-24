import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import QuotesCard from './scripts/components/QuotesCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuotesCard />
  </React.StrictMode>
);
