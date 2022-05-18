import React, { useState, useEffect } from 'react';
import "../css/conta.css";
import Table from 'react-bootstrap/Table'
import {useNavigate} from "react-router-dom"
import axios from 'axios';


const api = axios.create({
    baseURL:'https://carrinhodecontas.herokuapp.com/api/v1/'
})



function Conta(){

    const [dados,setDados] = useState('')
    const [carrinhos,setCarrinhos]=useState({carrinhos:[]})
    const [nomeCarro,setNomeCarro] = useState('')
    const [carId,setCarid] = useState('')
    const [user_ids,setUserid]=useState({user_ids:[]})

    const BotaoLigado = () => {
        if(!nomeCarro)
        {
            return <input className="corpo-login-botao" href=""type="submit" name="botao" value="Criar" disabled/>
        }
        
        else {
            return <input className="corpo-login-botao" href=""type="submit" name="botao" value="Criar" onClick={e=>criarCarrinho()}/>
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

     const criarCarrinho =async()=>{
        try{
            let res = await api.post('shopcarts/',{"name":nomeCarro},{headers:{Authorization: localStorage.getItem("myKey")}})
            setNomeCarro(null)
            console.log("criou")
        }catch(error){
            console.error(error.response.data)
        }       
    }
    const delCarrinho = async(id)  =>{
        try{
            let res = await api.put('shopcarts/'+id,{"user_ids":[]},{headers:{Authorization: localStorage.getItem("myKey")}})
            console.log("bye bye")
        }catch(error){
            console.error(error.response.data)
        } 
    }

    const compCarrinho = async(id,name)=>{
        try{
            let array = [localStorage.getItem("myId"),user_ids.user_ids[0]]
            let res = await api.put('shopcarts/'+id,{"user_ids":array},{headers:{Authorization: localStorage.getItem("myKey")}})
            console.log("compartilhando")
        }catch(error){
            console.error(error.response.data)
        } 
    }

    const editarCar = (id)=>{
            localStorage.setItem("carId",id)
            navigate("/itens")
    }
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
                Adicionar Lista  
                <input className="corpo-login-input" type="text" name = "email" placeholder = "Nome da lista" onChange={e => setNomeCarro(e.target.value)} />
                <BotaoLigado/>
            </div>
        </h1>
       <div class="panel-body table-responsive">
       <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
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
                
                    <input  type="submit" name = "editar" placeholder = "Editar" onClick={e => editarCar(item.id)} />
                    <input className="corpo-login-input" type="text" name = "email" placeholder = "Nome da lista" onChange={e => setUserid({user_ids:e.target.value})} />
                    <input  type="submit" name = "editar" placeholder = "Editar" onClick={e=>compCarrinho(item.id,item.name)} />
                    <button type="submit" class="btn btn-danger"><i class="far fa-trash-alt" onClick={e=>delCarrinho(item.id)}>Deletar</i></button>
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