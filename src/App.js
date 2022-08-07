import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import './App.css';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTranscation from './components/AddTranscation';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container"></div>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTranscation />
    </div>
  );
};

export default App;
