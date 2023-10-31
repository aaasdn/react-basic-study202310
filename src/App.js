import React from 'react';
import './App.css';
import ExpenseItem from './components/Expenseltem';

const App = () => {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3, 23),
    },
    {
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7, 4),
    },
  ];

  return (
    <>
      <ExpenseItem title='바나나' price={2000} date={new Date(2023, 3, 23)} />
    </>
  );
};

export default App;
