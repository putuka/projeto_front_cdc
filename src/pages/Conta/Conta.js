import React from "react";
import "../css/conta.css";
import Table from 'react-bootstrap/Table'

function Conta(){
    return(
        <html className="back">
            <head className="nav">
                
            </head>
            <body className="body">
                <h1>
                    Minhas Listas
                    <div>
                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i>Adicionar Lista</button> 
                    </div>
                </h1>
               <div class="panel-body table-responsive">
               <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome da ista</th>
                        <th>Valor da lista</th>
                        <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Lista1</td>
                        <td>Soma</td>
                        <td>
                            <button type="button" class="btn btn-primary"><i class="far fa-eye"></i>Editar</button>
                            <button type="button" class="btn btn-success"><i class="fas fa-edit"></i>Compartilhar</button>
                            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt">Deletar</i></button>
                        </td>
                        </tr>
                    </tbody>

                </Table>
               </div>
                
                
            </body>

           
        </html>


    );};

export default Conta;