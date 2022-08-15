import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

const MainWrapper = styled.div`
  width: 100%;
  background-color: white;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Main() {
  const [data, setData] = useState({
    labels: [1, 2, 3, 4, 3, 2],
    datasets: [
      {
        label: "Line",
        data: [0, 5, 7, 7, 5, 0],
        borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  return (
    <MainWrapper>
      <Line data={data}>Hello</Line>
    </MainWrapper>
  );
}

export default Main;
