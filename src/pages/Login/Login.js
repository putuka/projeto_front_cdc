import React, {useState} from "react";
import "../css/loginStyle.css"
import {useNavigate} from "react-router-dom"
import axios from "axios";

const api = axios.create({
    baseURL:'https://carrinhodecontas.herokuapp.com/api/v1/'
})

function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  

    let navigate = useNavigate();

    const login = async () =>{
        console.log(email,password)
        try{
            let res = await api.post('/auth/login',{"password":password,"email":email})
            localStorage.setItem("myKey",res.data.token)
            console.log(localStorage.getItem("myKey"))
            console.log(res)
            navigate("/conta")
        }catch(error){
            console.error(error.response.data)
        }
     }

    const ButtonEnable = () => {    
        console.log(email,password)
        if(email===""||password==="")
        {
            return <input className="corpo-login-botao" href=""type="submit" name="botao" value="Logar" disabled/>
        }
        else {
           return <input className="corpo-login-botao" href=""type="submit" name="botao" value="Logar" onClick={e=>login()}/>
        }
    }

    return(
        <html>
            <body className="corpo">
                <div >
                    <div className="corpo-login">
                        <h1 className="titulo">Conectar-se</h1>   
                        <input className="corpo-login-input" type="text" name = "email" placeholder = "Usuario..." onChange={e => setEmail(e.target.value)}/>
                        <input className="corpo-login-input" type="password" name = "password" placeholder = "Senha..."onChange={e => setPassword(e.target.value)}/>
                            <div className="botoes">
                                <ButtonEnable/>
                                <input className="corpo-login-botao" href="" type="submit" name="botao" value="Cadastro" onClick={()=>{navigate("/cadastro")}}/>
                            </div>
                    </div>
                </div>
            </body>
        </html>

);};export default Login;