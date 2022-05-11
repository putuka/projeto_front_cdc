import React from "react";
import { Container, Form, FormFeedback, FormGroup } from "reactstrap";
import "../Login/loginStyle.css"


function Login (){
 return(
        <section className="mainLogin">
        <Container>
                <Form style={{marginTop: 250,marginLeft:200,marginRight:200,padding:60,textAlign:'center', borderRadius:10,color:"#666",backgroundColor:"#eaeaea"}}>
                <FormGroup className="mb-3" controlId="formBasicEmail" style={{textAlignItem:"center"}}>     
                        <h1>Entre</h1>
                        <input type="text" name = "email" placeholder = "Seu Email..."/>
                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicPassword">
                        <input type="password" name = "senha" placeholder = "Sua senha..."/>
                </FormGroup>

                        <input type="checkbox"/>
                                 
                                <FormGroup className="mb-3" controlId="formBasicSubmit">
                                        <input type="submit" name = "Logar"/>
                                </FormGroup>
                                <FormGroup>
                                <a
                                className="App-link"
                                href="/cadastro"
                                target="_blank"
                                rel="noopener noreferrer"
                                        
                                >
                                         Cadastre-se
                                </a>   
                                </FormGroup>
                        </Form>

                </Container>
               
        </section>

);};

export default Login;