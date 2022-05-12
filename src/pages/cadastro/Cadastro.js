import React from "react";
import "../cadastro/cadastro.css"

function Cadastro (){
    return(
        <html>
            <body className="body">
                <form className="formulario">
                    <form>
                        
                        <input className="forminput" type="text" name = "Nome" placeholder = "nome..."/>
                        <input className="forminput" type="text" name = "email" placeholder = "Email..."/>
                        <input className="forminput" type="password" name = "password" placeholder = "Senha..."/>
                        <input className="forminput" type ="password" name = "password" placeholder = "Confirme sua Senha..."/>
                    </form>
                    <form>
                        <input className="formbotao" href="/login" type="submit" name="acao" value="Cadastrar"/>
                        <input className="formbotao" href="/login" type="submit" name="acao" value="Cancelar"/>
                    </form>
                </form>
                
            </body>   
        </html>
);};

export default Cadastro;