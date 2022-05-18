import React, { useState, useEffect } from 'react';
import "../css/conta.css";
import Table from 'react-bootstrap/Table'
//import { Button } from "bootstrap";
import {useLocation, useNavigate} from "react-router-dom"
import * as Reactbootstrap from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import axios from 'axios';


const api = axios.create({
    baseURL:'https://carrinhodecontas.herokuapp.com/api/v1/'
})



function Conta(){

    const [dados,setDados] = useState('')
    const [carrinhos,setCarrinhos]=useState({carrinhos:[]})
    const [adicionar,setAdd] = useState('')

   
    const BotaoLigado = () => {    
        console.log(adicionar)
        if(!adicionar||adicionar==='')
        {
            //return (<input className="corpo-login-input" type="text" name = "email" placeholder = "Nome da lista" disabled/>)
        }
        else {
            return (
                <h1>
                     <input className="corpo-login-input" type="text" name = "email" placeholder = "Nome da lista" />
                    <input  href="" type="submit" name="botao" value="Confrimar" onClick={()=>{setAdd('')}}/>
                </h1>
           )
        }
    }
    


     let navigate = useNavigate();
     useEffect(()=>{
        if(!localStorage.getItem("myKey")){navigate("/login")}
            const getUserdata = async () => {
                try{
                    let data = await api.get(/users/+localStorage.getItem("myId"),{headers:{Authorization: localStorage.getItem("myKey")}}).then(({data})=>data);   
                    setDados(data.name)
                }
                catch(error){
                    //console.error(error.response.data)
                }

            }
            const getCarrinhos = async () => {
                try{
                    let data = await api.get('/shopcarts',{headers:{Authorization: localStorage.getItem("myKey")}}).then(({data})=>data);
                    console.log(data)
                    setCarrinhos({carrinhos:data})
                }
                catch(error){
                    //console.error(error.response.data)
                }

            }
            getUserdata() 
            getCarrinhos()
     },[setDados])

    //  const getCarros = async () =>{
    //     try{
    //         let res = await api.getItem()
    //         let user = res.data.user
            

    //         console.log(res)
    //         //navigate("/conta")
    //     }catch(error){
    //         console.error(error.response.data)
    //     }
    //  }

    
        return(
            
            <html className="back">
                <head className="nav">
                </head>
                <body className="body">
                <h1>
                  <h1>
                      Olá {dados}
                  </h1>
            Minhas Listas
            <div>
            <input  href="" type="submit" name="botao" value="Adicionar Lista" onClick={()=>{setAdd('S')}}/>
            
            <BotaoLigado/>
            </div>
        </h1>
       <div class="panel-body table-responsive">
       <Table striped bordered hover>
            <thead>
                <tr>
                
                <th>#</th>
                <th>Donos</th>
                <th>Nome da ista</th>
                <th>Valor da lista</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    carrinhos.carrinhos && carrinhos.carrinhos.map((item)=>(
                        <tr key={carrinhos.id}>
                
                <td>{item.id}</td>
                <td>{item.users && item.users.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}</td>
                <td>{item.name}</td>
                <td>Soma</td>
                <td>
                    <button type="submit" class="btn btn-primary"><i class="far fa-eye"></i>Editar</button>
                    <button type="submit" class="btn btn-success"><i class="fas fa-edit"></i>Compartilhar</button>
                    <button type="submit" class="btn btn-danger"><i class="far fa-trash-alt">Deletar</i></button>
                </td>
                </tr>
                    ))
                }
                
                
                
            </tbody>
    
        </Table>
       </div>
                </body>
    
            </html>
        );
    };

export default Conta;