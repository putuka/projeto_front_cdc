import React from "react";
import "../Itens/Itens.css"
import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button } from "bootstrap";

function Itens(){
    return(
        <html className="back">
            <head className="nav">
                
            </head>
            <body className="body">
                <h1>
                    Nome da lista X
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