import React, { Component } from 'react';
import {Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import Conta from './pages/Conta/Conta';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro.js';
import Itens from './pages/Itens/Itens';
import Main from './pages/Main';
import Relatorio from './pages/Relatorio/Relatorio'
import "./App.css"


  class App extends Component{ 
    render(){ 
      return(   
      <div className='App'>
        
        {/* <nav className='Cabecalho'>
          <button type="button" >Conectar</button> 
          <button type="button">Cadastrar</button>
          <button type="button">Minhas Listas</button>
          <button type="button">Relatorio</button>
        </nav> */}
        <div className='Cabecalho'>
          <Link to="/login" >Login</Link>
          <Link to="/cadastro" >Cadastro</Link>
          <Link to="/conta" >Minhas Listas</Link>
          <Link to="/relatorio" >Relatorio</Link>
        </div>
        
        <div>
        <Routes>
          <Route path="/"  element ={<Login/>} />
          <Route path="/conta" element ={<Conta/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/cadastro" element ={<Cadastro/>} />
          <Route path="/itens" element ={<Itens/>} />
          <Route path="/relatorio" element={<Relatorio/>}/>
          <Route path="*" element ={<Main/>} />
        </Routes> 
        </div>
      </div>
      );};   
}
export default App;




