import React from "react";
import "../Login/loginStyle.css"

function Login (){
    return(
        <html>
            <body className="corpo">
                <form className="corpo-login">
                    <h1>Conectar-se</h1>   
                    <input className="corpo-login-input" type="text" name = "email" placeholder = "usuario..."/>
                    <input className="corpo-login-input" type="password" name = "password" placeholder = "Senha..."/>
                <form className="corpo-botao">
                    <input className="corpo-login-input-botao" type="submit" name="botao" value="Logar"/>
                    <input className="corpo-login-input-botao" href="/cadastro" type="submit" name="botao" value="Cadastro" />
                </form>
                </form>
            </body>
        </html>

);};export default Login;