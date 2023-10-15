import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Footer from './Pages/Home/Footer';
import Header from './Pages/Home/Header';
import MainPageBody from './Pages/Home/MainPageBody';

function App() {
  return (
    <div>
      <Header/>
      <MainPageBody/>
      <Footer/>
    </div>
  );
}

export default App;
