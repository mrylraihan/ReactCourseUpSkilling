import React from 'react';

import './App.css';
import TestRedux from './components/TestRedux';
import TestUseReducer from './components/TestUseReducer';


function App() {
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    <TestRedux/>
    <TestUseReducer/>
    </>
  );
}

export default App;
