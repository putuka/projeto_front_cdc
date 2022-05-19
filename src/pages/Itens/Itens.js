import React, { useEffect,useState } from "react";
import "../css/Itens.css"
import Table from 'react-bootstrap/Table'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'



const api = axios.create({
    baseURL:'https://carrinhodecontas.herokuapp.com/api/v1/'
})


function Itens(){
    const [tabela,setTabela]=useState(null)
    const [cat,setCat]=useState(null)
    const [produtos,setProdutos]=useState(null)

     const [chosenCat,setChosencat]=useState(null)
     const [quant,setQuant]=useState(null)
     
     const [value,setValue]=useState(null)
     const [nome,setNome]=useState(null)

     const [producId,setProdid]=useState(null)
     const [promoValue,setPromo]=useState(null)
     const [quantAtacado,setQuantatacado]=useState(null)
     







    
    let navigate = useNavigate();
    const getTabelaData = async () => {
        try{
            let data = await api.get(/shopcarts/+localStorage.getItem("carId"),{headers:{Authorization: localStorage.getItem("myKey")}}).then(({data})=>data);
            setTabela(data)
        }
        catch(error){
            //console.error(error.response.data)
        }
    }
    const getCategories = async () => {
        try{
            await api.get("/categories",{headers:{Authorization: localStorage.getItem("myKey")}}).then(({ data }) => setCat(data));
        }
        catch(error){
            console.log(error)
        }
    }

    const getProdutos = async () =>{
        try{
            await api.get("/products",{headers:{Authorization: localStorage.getItem("myKey")}}).then(({ data }) => setProdutos(data));
        }
        catch(error){
            console.log(error)
        }
    }

    const criarItem = async () =>{
        try{
            await api.post("/products",{"name":nome,"category_id":chosenCat,"price":value},{headers:{Authorization: localStorage.getItem("myKey")}}).then(()=>{getProdutos(); setNome(null);setValue(null)});

        }
        catch(error){
            console.log(error)
        }
    }
    const addCarrinho = async()=>{
        try{
            await api.post("/products_shopcarts",{"shopcart_id":localStorage.getItem("carId"),"product_id":producId,"promo_quantity":quantAtacado,"promo_value":promoValue,"quantity":quant},{headers:{Authorization: localStorage.getItem("myKey")}}).then(({ data }) => {console.log("carr:",data);getTabelaData()});
        }
        catch(error){
            console.log(error)
        }
    }
    const  getTotatl  =()=>{
        let total = 0;
        tabela?.products?.map(x=>{
            if(x.quantity>x.promoQuantity&&x.promoQuantity!=null)
            {
                total=total+(x.promoValue*x.quantity)
            }
            else{
                total=total+(x.quantity*x.price)
            }
        })
        return total
    }

    const deleteIten =  async(id)=>{
        try{
            await api.delete("/products_shopcarts/"+id,{headers:{Authorization: localStorage.getItem("myKey")}}).then(()=>{getTabelaData()});
        }
        catch(error){
            console.log(error)
        }
    }
    

    useEffect(()=>{
        if(!localStorage.getItem("myKey")){navigate("/login")}
        if (!tabela) {
            getTabelaData()
          } 
         if(!cat){
            getCategories()
         }
         if(!produtos){getProdutos()} 
         console.log("produtos:",produtos)
         console.log("table data:",tabela)
        //console.log("categorias: ",cat)
     },[tabela,cat])

    if(!tabela||!cat||!produtos){return null} 

    return(
        <html className="back">
            <header className="nav">
            <h1 className="titulo-body">
                    #{tabela.id} 
                    {tabela.name}
                </h1>
            </header>
            <body className="body">
                
               <div class="panel-body table-responsive">
                   {chosenCat}{value}{promoValue}{nome}{quant}{quantAtacado}
               <Table striped bordered hover className="table">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome do item</th>
                        <th>Quantidade do Item</th>
                        <th>Preço do item</th>
                        <th>Valor Total</th>
                        <th> Ações</th>
                        </tr>
                    </thead>
                    <tbody className="corpo-lista">
                    {
                                    tabela.products && tabela.products.map((item)=>(
                                    <tr key={`product${item.id}`}>
                                
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity>item.promoQuantity&&item.promoQuantity!=null ?item.promoValue : item.price}</td>
                                <td>{item.quantity*(item.quantity>item.promoQuantity&&item.promoQuantity!=null ?item.promoValue : item.price)}</td>
                                <td>
                                    <input  type="submit" name = "editar" placeholder = "Editar" ></input>
                                    <button type="submit" class="btn btn-danger" onClick={e=>deleteIten(item.productsShopcartId)}> <i class="far fa-trash-alt"  >Deletar</i></button>
                                </td>
                                </tr>
                                    ))
                                }
                    </tbody>

                </Table>
                Valor total: {getTotatl()}
               </div>
               <div > 
                  <form className="adicionar-itens">
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Categorias
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    cat.map(x=><Dropdown.Item onClick={(e) => {setChosencat(x.id);console.log(x.id);}}>{x.name} </Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="div-itens" id="Nome"><p> Nome do Item </p></div> <div> <input value={nome} className="inputs" type="text" onChange={e => setNome(e.target.value)}/></div> 
                        
                        <div className="div-itens"><p> Valor de Varejo </p></div> <div> <input value={value} className="inputs" type="text" onChange={e => setValue(e.target.value)}/></div>
                        <div className="div-itens"><p> </p></div> <div> <input className="inputs" type="submit" value="Adicionar" onClick={e=>criarItem()} disabled={!chosenCat||!nome||!value}/></div>
                        
                        
                   </form>
                   <form>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Produtos
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    produtos.map(x=><Dropdown.Item onClick={(e) => {setProdid(x.id);console.log(x.id);}} >{x.name}</Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="div-itens"><p> Quantidade Atacado </p></div> <div> <input className="inputs" type="text" onChange={e => setQuantatacado(e.target.value)}/></div> 
                        <div className="div-itens"><p> Valor de Atacado </p></div> <div> <input className="inputs" type="text" onChange={e => setPromo(e.target.value)} /></div>
                        <div className="div-itens"><p> Quantidade </p></div> <div> <input className="inputs" type="text" onChange={e => setQuant(e.target.value)}/></div>
                        <div className="div-itens"><p> </p></div> <div> <input className="inputs" type="submit" value="Adicionar" onClick={e=>addCarrinho()} disabled={!quantAtacado||!promoValue||!quant||!producId}/></div>
                        
                   </form>
               </div>
            </body>
        </html>


    );};

export default Itens;