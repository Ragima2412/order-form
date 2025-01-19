import React from 'react';
import './App.css';
import Form from './components/Form/Form';

const App = () => {
  
  return (
    <div className='offering-page'>
        <div className='offering-page__container'>
          <h1 className='offering-page__title'>Оформление заказа </h1>
          <Form />
        </div>
    </div>
  )
};

export default App;