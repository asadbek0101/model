import React from "react";
import styled from "styled-components";

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 4px 10px;
    border: 2px solid black;
    border-radius: 8px;
    background-color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default function InputPlus({ onclick }) {
  return (
    <WrapperButton>
      <button onClick={onclick}>
        <i class="fa-solid fa-plus"></i> Line qo'shish
      </button>
    </WrapperButton>
  );
}
