import React from "react";
import "../css/conta.css";

function Conta(){
    return(
        <html className="back">
            <head className="nav">
                <a className="active" href="#Itens"> Minhas Listas</a>
                <h1 className="titulo-lista"> Minha Lista</h1>
                <input className="botaoAdicionar" type="submit" value="Adicionar Item"/>
            </head>
            <body className="body">
                <div className="div-tabela">
                    <table>
                        <thead>
                            <tr className="tabela">
                                <th className="itens-tabela">Item</th>
                                <th className="itens-tabela">Quantidade</th>
                                <th className="itens-tabela">Valor Atacado</th>
                                <th className="itens-tabela">Valor Varejo</th>
                                <th className="itens-tabela">Valor Total</th>
                                <th className="itens-tabela">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tabela">
                                <tb> exemplo1</tb>
                                <tb> exemplo2</tb>
                                <tb> exemplo3</tb>
                                <tb> exemplo4</tb>
                                <tb> exemplo5</tb>
                                <tb> <input className="botaoEnviar"type="submit" value="editar"/> <input className="botaoExcluir" type="submit" value="excluir"/></tb>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>

           
        </html>


    );};

export default Conta;