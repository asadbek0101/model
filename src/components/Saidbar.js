import React, { useState } from "react";
import styled from "styled-components";
import InputGroup from "./InputGroup";

const WrapperSaidbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  .input-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-right: none;
    padding: 0 0 0 20px;
    border-radius: 4px;
    margin: 20px 0;
  }
  .input-group-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
  .title-group {
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .form-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    overflow: hidden;
    background-color: black;
    label {
      background-color: black;
      color: white;
      padding: 3px 10px;
      font-size: 20px;
    }
    input {
      padding: 4px 10px;
      outline: none;
      border: none;
      font-size: 20px;
    }
  }
  .for-scroll-input-group {
    overflow-y: auto;
    height: 66vh;
  }
  .for-scroll-input-group::-webkit-scrollbar {
    display: none;
  }
`;

export default function Saidbar({
  label,
  type,
  data,
  count,
  setData,
  onchangeX,
  onchangeY,
}) {
  const handleFormChangeX = (index, event) => {
    console.log(event.target.value);
    let d = [...data];
    d[count].dataChart[index].coordinateX = event.target.value;
    setData(d);
  };

  const handleFormChangeY = (index, event) => {
    console.log(event.target.value);

    let d = [...data];
    d[count].dataChart[index].coordinateY = event.target.value;
    setData(d);
  };

  const editFunction = (i) => {};

  return (
    <WrapperSaidbar>
      <div className="text-center">
        <p className="fs-4 m-0 p-0">Koordinata</p>
      </div>
      <div className="for-scroll-input-group">
        {data.length > 0 ? (
          data[count].dataChart.map((elementInArray, index) => (
            <div className="" key={index}>
              <InputGroup
                onchangeX={(e) => handleFormChangeX(index, e)}
                onchangeY={(e) => handleFormChangeY(index, e)}
                data={elementInArray}
                leftTitle={index + 1}
                type="number"
              />
            </div>
          ))
        ) : (
          <div />
        )}
      </div>
      <div className="w-100 text-align-center">
        <button
          className="w-100 mx-auto  border-2 rounded-3 fs-4"
          onClick={editFunction}
        >
          Chizish
        </button>
      </div>
    </WrapperSaidbar>
  );
}
