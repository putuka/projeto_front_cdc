import React, { useEffect,useState } from "react";
import "../css/Itens.css"
import Table from 'react-bootstrap/Table'
import axios from "axios";
import {useNavigate} from "react-router-dom"



const api = axios.create({
    baseURL:'https://carrinhodecontas.herokuapp.com/api/v1/'
})


function Itens(){
    const [tabela,setTabela] = useState('')

    let navigate = useNavigate();
    const getTabelaData = async () => {
        try{
            let data = await api.get(/shopcarts/+localStorage.getItem("carId"),{headers:{Authorization: localStorage.getItem("myKey")}}).then(({data})=>data);   
            setTabela(data)
            console.log(tabela)
        }
        catch(error){
            //console.error(error.response.data)
        }
    }

    useEffect(()=>{
        if(!localStorage.getItem("myKey")){navigate("/login")}
        getTabelaData() 
     },[setTabela])

    return(
        <html className="back">
            <head className="nav">
                
            </head>
            <body className="body">
                <h1>
                    #{tabela.id} 
                    {tabela.name}
                    <div >
                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i>Adicionar Item</button> 
                    </div>
                </h1>
               <div class="panel-body table-responsive">
               <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome do item</th>
                        <th>Quantidade do Item</th>
                        <th>Preço do item</th>
                        <th> Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Item1</td>
                        <td>X</td>
                        <td>X * preco</td>
                        <td>
                            <button type="button" class="btn btn-primary"><i class="far fa-eye"></i>Editar</button> 
                            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt">Deletar</i></button>
                        </td>
                        </tr>
                        
                        
                        
                    </tbody>

                </Table>
               </div>
                
                
            </body>

           
        </html>


    );};

export default Itens;