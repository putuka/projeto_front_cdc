import React from "react";
import "../css/loginStyle.css"

function Login (){
    return(
        <html>
            <body className="corpo">
                <div >
                    <div className="corpo-login">
                        <h1 className="titulo">Conectar-se</h1>   
                        <input className="corpo-login-input" type="text" name = "email" placeholder = "usuario..."/>
                        <input className="corpo-login-input" type="password" name = "password" placeholder = "Senha..."/>
                            <div className="botoes">
                                <input className="corpo-login-botao" href=""type="submit" name="botao" value="Logar"/>
                                <input className="corpo-login-botao" href="" type="submit" name="botao" value="Cadastro" />
                            </div>
                    </div>
                </div>
            </body>
        </html>

);};export default Login;