import React, { useState, useEffect } from 'react';
import "../css/conta.css";
import Table from 'react-bootstrap/Table'
import {useNavigate} from "react-router-dom"
import axios from 'axios';


const api = axios.create({
    baseURL:'https://carrinhodecontas.herokuapp.com/api/v1/'
})
var arrayId = [localStorage.getItem("myId")]


function Conta(){

    const [dados,setDados] = useState('')
    const [carrinhos,setCarrinhos]=useState({carrinhos:[]})
    const [nomeCarro,setNomeCarro] = useState('')
    const [carId,setCarid] = useState('')
    const [user_ids,setUserid]=useState({user_ids:[]})

    var input = document.querySelector("#idsUser");

    function Add(valor) {
        if(!arrayId.includes(valor,0)&&valor!=null)
        {
            arrayId.push(valor);
        }
        //document.getElementById("RETORNO").innerHTML = arrayId;
    }

    const BotaoLigado = () => {
        if(!nomeCarro)
        {
            return <input className="corpo-login-botao" href=""type="submit" name="botao" value="Criar" disabled/>
        }
        
        else {
            return <input className="corpo-login-botao" href=""type="submit" name="botao" value="Criar" onClick={e=>criarCarrinho()}/>
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

    const getUserdata = async () => {
        try{
            let data = await api.get(/users/+localStorage.getItem("myId"),{headers:{Authorization: localStorage.getItem("myKey")}}).then(({data})=>data);   
            setDados(data.name)
        }
        catch(error){
            //console.error(error.response.data)
        }
    }
     let navigate = useNavigate();
     useEffect(()=>{
        if(!localStorage.getItem("myKey")){navigate("/login")}
        getUserdata() 
        getCarrinhos()
     },[setDados])

     const criarCarrinho =async()=>{
        try{
            let res = await api.post('shopcarts/',{"name":nomeCarro},{headers:{Authorization: localStorage.getItem("myKey")}})
            setNomeCarro(null)
            getCarrinhos()
            console.log("criou")
        }catch(error){
            console.error(error.response.data)
        }       
    }
    const delCarrinho = async(id)  =>{
        try{
            let res = await api.put('shopcarts/'+id,{"user_ids":[]},{headers:{Authorization: localStorage.getItem("myKey")}})
            getCarrinhos()
            console.log("bye bye")
        }catch(error){
            console.error(error.response.data)
        } 
    }

    const compCarrinho = async(id,name,value)=>{
        try{
            
            console.log("o valor é"+value)
            Add(value);
            console.log(arrayId)
             let array = arrayId
             console.log(array)
             let res = await api.put('shopcarts/'+id,{"user_ids":array,"name":name},{headers:{Authorization: localStorage.getItem("myKey")}})
             getCarrinhos()
             console.log("compartilhando")
             setUserid({user_ids:[]})
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
                <head className="nav"/>

            <body className="body">
                <div className='div-body'>
                    <div>
                    <h1>
                        Olá, {dados}
                        Essas são suas Listas!
                    </h1>
                
                        <div className='lista-top'>
                            Adicionar Lista  
                            <input className="corpo-login-input" type="text" name = "email" placeholder = "Nome da lista" onChange={e => setNomeCarro(e.target.value)} />
                            <BotaoLigado/>
                            <div>
                            Compartilhar Lista
                            <input id="idsUser" className="corpo-login-input" type="text" name = "email" placeholder = "Com quem voce deseja compartilhar" onChange={e => setUserid({user_ids:e.target.value})} />
                            </div>
                            
                        </div>
                        </div>
                    <div class="panel-body table-responsive">
                    <Table striped bordered hover className='table'>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Donos</th>
                                <th>Nome da lista</th>
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
                                    <button type="button" class="btn btn-info"><i class="far fa-trash-alt" onClick={e =>editarCar(item.id)}>editar</i></button>
                                    <button type="button" class="btn btn-success"><i class="far fa-trash-alt" onClick={e=>compCarrinho(item.id,item.name,input.value)}>compartilhar</i></button>
                                    <button type="button" class="btn btn-danger"><i class="far fa-trash-alt" onClick={e=>delCarrinho(item.id)}>Deletar</i></button>
                                </td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                    </div>
                </body>
    
            </html>
        );
    };

export default Conta;