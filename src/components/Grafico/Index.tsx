import React from "react";
import { Chart } from "react-google-charts";
import { CalcularInvestimentoResponse } from "../../pages/Home/Index";

const options = {
  title: "Rendimento de CDI, IPCA e Selic ao Longo do Tempo",
  hAxis: { title: "Mês" },
  vAxis: { title: "Valor" },
  curveType: "function",
  legend: { position: "bottom" },
};

const Grafico: React.FC<{dadosGrafico: CalcularInvestimentoResponse[]}> = ({dadosGrafico}) => {
  const chartData = [
    ["Mês", "CDI", "IPCA", "Selic"],
    ...dadosGrafico.map((dados) => [
      dados.mes,
      dados.valorCdi,
      dados.valorIpca,
      dados.valorSelic,
    ]),
  ];

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />
  );
};

export default Grafico;
