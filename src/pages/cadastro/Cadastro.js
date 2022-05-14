import React from "react";
import "../cadastro/cadastro.css"

function Cadastro (){
    return(
        <html>
            <body className="body">
                <div className="formulario">
                        <h1 className="titulo-form">Cadastro</h1>
                        <input className="forminput" type="text" name = "Nome" placeholder = "nome..."/>
                        <input className="forminput" type="text" name = "email" placeholder = "Email..."/>
                        <input className="forminput" type="password" name = "password" placeholder = "Senha..."/>
                        <input className="forminput" type ="password" name = "password" placeholder = "Confirme sua Senha..."/>
                        <div className="formulario-botao">
                            <input className="formbotao" href="/login" type="submit" name="acao" value="Cadastrar"/>
                            <input className="formbotao" href="/login" type="submit" name="acao" value="Cancelar"/>
                        </div>
                </div>
                
            </body>   
        </html>
);};export default Cadastro;