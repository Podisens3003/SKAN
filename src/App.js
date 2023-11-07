import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPageBody from './Pages/Home/MainPageBody';
import Authorisation from './Pages/Authorisation/Authorisation';
import SearchPage from './Pages/SearchPage/SearchPage';
import ResponsePage from './Pages/ResponsePage/ResponsePage';
import Layout from './Components/ComponentsOfEachPage/Layout';



function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/> */}
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<MainPageBody/>}/>
              <Route path='sign-in' element={<Authorisation/>}/>
              <Route path='search' element={<SearchPage/>}/>
              <Route path='search-response' element={<ResponsePage/>}/>
            </Route>
            

          </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
