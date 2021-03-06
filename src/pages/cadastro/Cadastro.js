import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../css/cadastro.css"
import axios from "axios";

const api = axios.create({
    baseURL:'https://carrinhodecontas.herokuapp.com/api/v1/'
})



function Cadastro (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const [name, setName] = useState('');
    //const [pass2, setPass2] = useState('');

    let navigate = useNavigate();

    const createAccount = async () =>{
        console.log(email,password,name)
        try{
            let res = await api.post('/users/',{"password":password,"email":email,"name":name})
            console.log(res)
        }catch(error){
            console.error(error.response.data)
        }
     }

    // const CreateAccount = () =>{
    //     axios.post("https://carrinhodecontas.herokuapp.com/api/v1/users",{email: email,  password: password,  name: name},
    //     {
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded', "Access-Control-Allow-Origin": "*", "Accept": "application/json" 
    //     }
    //     }
    //     ).then(response=>console.log(response))
    //       }

    const ButtonEnable = () => {
        if(email===""||password===""||name==="")
        {
            return <input className="formbotao" href="/login" type="submit" name="acao" value="Cadastrar" disabled/>
        }
        else {
            return <input className="formbotao" href="/login" type="submit" name="acao" value="Cadastrar" onClick={e=>createAccount()} />
        }
    }

    return(
        <html>
            <body className="body">
                <div className="formulario">
                        <h1 className="titulo-form">Cadastro</h1>
                        <input className="forminput" type="text" name = "Nome" placeholder = "nome..." onChange={e => setName(e.target.value)}/>
                        <input className="forminput" type="text" name = "email" placeholder = "Email..."onChange={e => setEmail(e.target.value)}/>
                        <input className="forminput" type="password" name = "password" placeholder = "Senha..."onChange={e => setPassword(e.target.value)}/>
                        <div className="formulario-botao">
                            <ButtonEnable/>
                            <input className="formbotao" href="/login" type="submit" name="acao" value="Cancelar" onClick={()=>{navigate("/login")}}/>
                        </div>
                </div>
                
            </body>   
        </html>
);};export default Cadastro;