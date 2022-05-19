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
            <header className="nav">
            <h1 className="titulo-body">
                    #{tabela.id} 
                    {tabela.name}
                </h1>
            </header>
            <body className="body">
                
               <div class="panel-body table-responsive">
               <Table striped bordered hover className="table">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome do item</th>
                        <th>Quantidade do Item</th>
                        <th>Preço do item</th>
                        <th> Ações</th>
                        </tr>
                    </thead>
                    <tbody className="corpo-lista">
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
               <div > 
                  <form className="adicionar-itens">
                        <title className="div-itens">Categoria</title>
                        <div className="div-itens"><p> Nome do Item </p></div> <div> <input className="inputs" type="text" /></div>
                        <div className="div-itens"><p> Valor </p></div> <div> <input className="inputs" type="text" /></div>
                        <div className="div-itens"><p> Valor de Atacado </p></div> <div> <input className="inputs" type="text" /></div>
                        <div className="div-itens"><p> Valor de Varejo </p></div> <div> <input className="inputs" type="text" /></div>
                        <div className="div-itens"><p> </p></div> <div> <input className="inputs" type="submit" value="Adicionar"/></div>
                   </form>
               </div>
            </body>
        </html>


    );};

export default Itens;