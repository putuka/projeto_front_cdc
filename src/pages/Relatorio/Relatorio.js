import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from "axios"


import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const api = axios.create({
    baseURL:'https://carrinhodecontas.herokuapp.com/api/v1/'
})

const Relatorio = () => {
    const[dados,setDados]=useState({dados:[]})
    const getUserdata = async () => {
        try{
            let data = await api.get(/users/+localStorage.getItem("myId"),{headers:{Authorization: localStorage.getItem("myKey")}}).then(({data})=>data);   
            setDados({dados:data})
            console.log(data)
            console.log("dados: ", dados)
            console.log(dados.dados.spentThisYearByCategory.map(x=>x.name))
        }
        catch(error){
            //console.error(error.response.data)
        }
    }

  useEffect(() => {
    getUserdata()
  },[setDados])

  
  var data = {
    labels: dados?.dados?.spentThisYearByCategory?.map(x=>x.name),
    datasets: [{
      label: '# of Votes',
      data: dados?.dados?.spentThisYearByCategory?.map(x=>x.spentThisYear),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Doughnut
        data={data}
        height={400}
        options={options}

      />
    </div>
  )
}

export default Relatorio