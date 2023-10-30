import React from 'react';
import './App.css';
import Expenseltem from './components/Expenseltem';
import NoName from './NoName';

function App() {
  const $h2 = <h2>반가워요~</h2>;

  const value = '메롱메롱';

  return (
    <>
    <Expenseltem />
    <Expenseltem />
    <Expenseltem />
    <Expenseltem />
    <Expenseltem />
    <Expenseltem />
      <div className="App">
        <h1>메롱메롱</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' />
        <p>
        오늘은 월요일 입니다. <br />
        그래서 공부하기가 싫어요~
        </p>
      </div>
    </>
  );
}

export default App;
