import React from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import IncomeExpense from './components/IncomeExpense.jsx';
import History from './components/History.jsx';
import AddNew from './components/AddNew.jsx';

import { GlobalProvider } from './context/GlobalState.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <Header/>
      <div className='text-left'>
        <Balance />
        <IncomeExpense />
        <History />    
        <AddNew /> 
      </div>
    </GlobalProvider>
  </React.StrictMode>
);
