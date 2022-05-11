import React from "react";
import "../cadastro/cadastro.css"

function Cadastro (){
    return(
        <html>
            <head>
                <title>Cadastro</title>
            </head>

            <body className="body">
                <form className="formulario">
                    <h3>Cadastro</h3>
                    <input className="forminput" type="text" name = "Nome" placeholder = "nome..."/>
                    <input className="forminput" type="text" name = "email" placeholder = "Email..."/>
                    <input className="forminput" type="password" name = "password" placeholder = "Senha..."/>
                    <input className="forminput" type ="password" name = "password" placeholder = "Confirme sua Senha..."/>
                    <input className="formbotao" href="/login" type="submit" name="acao" value="Cadastrar"/>
                    <input className="formbotao" href="/login" type="submit" name="acao" value="Cancelar"/>
                </form>
                
            </body>   
        </html>
);};

export default Cadastro;