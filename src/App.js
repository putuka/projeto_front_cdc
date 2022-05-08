import React, { Component } from 'react';
import {Routes, Route} from "react-router-dom";
import Main from './pages/Main';
import Conta from './pages/Conta';
import Login from './pages/Login';

  class App extends Component{ 
    render(){ 
      return( 

      <div className='App'>
        <h1></h1>
        <Routes>
          <Route path="/"  element ={<Main/>} />
          <Route path="/conta" element ={<Conta/>} />
          <Route path="/login" element ={<Login/>} />
        </Routes>
      </div>
      );};
    
}
export default App;
