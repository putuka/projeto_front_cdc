import React, { useState, useEffect, Fragment } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { CSVLink } from "react-csv";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const api = axios.create({
  baseURL: "https://carrinhodecontas.herokuapp.com/api/v1/",
});

const Relatorio = () => {
  const [dados, setDados] = useState(null);
  const getUserdata = async () => {
    try {
      await api
        .get(/users/ + localStorage.getItem("myId"), {
          headers: { Authorization: localStorage.getItem("myKey") },
        })
        .then(({ data }) => setDados(data));
    } catch (error) {
      //console.error(error.response.data)
    }
  };

  useEffect(() => {
    if (!dados) {
      getUserdata();
    }
    console.log("dados:", dados);
  }, [dados]);

  var data = {
    labels: dados?.spentThisYearByCategory?.map((x) => x.name),
    datasets: [
      {
        label: "",
        data: dados?.spentThisYearByCategory?.map((x) => x.spentThisYear),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
  };

  const headers = [
    { label: "Categoria", key: "name" },
    { label: "Gasto no ano", key: "spentThisYear" },
  ];

  const csvData = dados?.spentThisYearByCategory;
  console.log(csvData);

  const csvReport = {
    data: csvData,
    headers: headers,
    filename: "SpentThisYearByCategory.csv",
  };

  return (
    <>
      <div>
        <Doughnut
          data={data}
          height={400}
          options={options}
          plugins={[ChartDataLabels]}
        />
      </div>
      <div>{"total gasto no ano: " + dados?.spentThisYear}</div>
      {!!csvData && <CSVLink {...csvReport}>Exportar em CSV</CSVLink>}
    </>
  );
};

export default Relatorio;
