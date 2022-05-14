import React, { Component } from 'react';
import {Routes, Route} from "react-router-dom";
import Conta from './pages/Conta/Conta';
import Login from './pages/Login/Login';
import Cadastro from './pages/cadastro/Cadastro.js';

  class App extends Component{ 
    render(){ 
     
      return( 

      <div className='App'>
        <h1></h1>
        <Routes>
          <Route path="/"  element ={<Login/>} />
          <Route path="/conta" element ={<Conta/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/cadastro" element ={<Cadastro/>} />
        </Routes>
      </div>
      );};
    
}
export default App;
