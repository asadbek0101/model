import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Saidbar from "../components/Saidbar";

const WrapperHome = styled.div`
  background-color: #7d9d9c;
  height: 100vh;
  .scroll-y {
    height: 80vh;
    overflow-y: auto;
  }
  .scroll-y::-webkit-scrollbar {
    display: none;
  }
`;
export default function Home() {
  const [data, setData] = useState([]);

  const [count, setCount] = useState(-1);
  const increment = () => setCount(count + 1);
  console.log("count k", count);

  const handleFormChangeX = (index, event) => {
    let dataX = [...data];
    dataX[index][event.target.coordinateX] = event.target.value;
    setData(dataX);
  };

  const handleFormChangeY = (index, event) => {
    let dataY = [...data];
    dataY[index][event.target.coordinateY] = event.target.value;
    setData(dataY);
  };

  console.log("data ", data);

  return (
    <WrapperHome>
      <div className="row m-0">
        <div className="col-12">
          <Header
            setData={setData}
            data={data}
            count={count}
            setCount={setCount}
            increment={increment}
          />
        </div>
        <div></div>
      </div>
      <div className="row m-0 mt-4">
        <div className="col-3">
          <Saidbar setData={setData} count={count} data={data} type="number" />
        </div>
        <div className="col-9">
          <Main />
        </div>
      </div>
    </WrapperHome>
  );
}
